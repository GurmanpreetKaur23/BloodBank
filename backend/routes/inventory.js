const express = require('express');
const router = express.Router();

// Temporary basic routes
router.get('/', (req, res) => {
  res.json({ message: 'Get inventory endpoint - to be implemented' });
});

router.post('/', (req, res) => {
  res.json({ message: 'Add inventory endpoint - to be implemented' });
});

module.exports = router;