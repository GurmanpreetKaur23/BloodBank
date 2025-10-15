const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const { auth, staffAuth } = require('../middleware/auth');
const BloodRequest = require('../models/BloodRequest');

// Create blood request
router.post('/', [
  body('patientName', 'Patient name is required').not().isEmpty(),
  body('bloodGroup', 'Valid blood group is required').isIn(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
  body('units', 'Units must be a positive number').isInt({ min: 1 }),
  body('hospital', 'Hospital name is required').not().isEmpty(),
  body('urgency', 'Urgency level is required').isIn(['low', 'medium', 'high', 'critical'])
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const bloodRequest = new BloodRequest(req.body);
    await bloodRequest.save();

    res.status(201).json({
      success: true,
      data: bloodRequest
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Get all blood requests
router.get('/', staffAuth, async (req, res) => {
  try {
    const requests = await BloodRequest.find()
      .sort({ createdAt: -1 })
      .populate('requestedBy', 'name email');

    res.json({
      success: true,
      data: requests
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Update request status
router.put('/:id/status', staffAuth, async (req, res) => {
  try {
    const { status } = req.body;
    const request = await BloodRequest.findByIdAndUpdate(
      req.params.id,
      { status, processedBy: req.user.id },
      { new: true }
    ).populate('requestedBy', 'name email');

    if (!request) {
      return res.status(404).json({ success: false, message: 'Request not found' });
    }

    res.json({
      success: true,
      data: request
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;