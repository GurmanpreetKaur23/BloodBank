const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  bloodGroup: {
    type: String,
    required: true,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']
  },
  quantity: {
    type: Number,
    required: true,
    min: 0
  },
  type: {
    type: String,
    enum: ['whole_blood', 'platelets', 'plasma', 'red_cells'],
    default: 'whole_blood'
  },
  expiryDate: {
    type: Date,
    required: true
  },
  donor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  status: {
    type: String,
    enum: ['available', 'used', 'expired'],
    default: 'available'
  },
  location: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

// Update blood bank analytics when inventory changes
inventorySchema.post('save', async function() {
  await mongoose.model('Analytics').updateBloodBankStats();
});

module.exports = mongoose.model('Inventory', inventorySchema);