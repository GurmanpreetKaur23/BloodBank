const mongoose = require('mongoose');

const analyticsSchema = new mongoose.Schema({
  totalDonations: {
    type: Number,
    default: 0
  },
  activeDonors: {
    type: Number,
    default: 0
  },
  bloodGroupStats: {
    'A+': { type: Number, default: 0 },
    'A-': { type: Number, default: 0 },
    'B+': { type: Number, default: 0 },
    'B-': { type: Number, default: 0 },
    'AB+': { type: Number, default: 0 },
    'AB-': { type: Number, default: 0 },
    'O+': { type: Number, default: 0 },
    'O-': { type: Number, default: 0 }
  },
  monthlyDonations: [{
    month: String,
    count: Number
  }],
  criticalLevels: [{
    bloodGroup: String,
    currentLevel: Number,
    minRequired: Number
  }],
  lastUpdated: {
    type: Date,
    default: Date.now
  }
});

// Update blood bank statistics
analyticsSchema.statics.updateBloodBankStats = async function() {
  const Inventory = mongoose.model('Inventory');
  const User = mongoose.model('User');
  
  const bloodStats = await Inventory.aggregate([
    { $match: { status: 'available' } },
    { $group: { _id: '$bloodGroup', total: { $sum: '$quantity' } } }
  ]);
  
  const bloodGroupStats = {};
  ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].forEach(group => {
    bloodGroupStats[group] = 0;
  });
  
  bloodStats.forEach(stat => {
    bloodGroupStats[stat._id] = stat.total;
  });
  
  const totalDonations = await Inventory.countDocuments();
  const activeDonors = await User.countDocuments({ role: 'donor', isEligible: true });
  
  await this.findOneAndUpdate(
    {},
    {
      totalDonations,
      activeDonors,
      bloodGroupStats,
      lastUpdated: new Date()
    },
    { upsert: true, new: true }
  );
};

module.exports = mongoose.model('Analytics', analyticsSchema);