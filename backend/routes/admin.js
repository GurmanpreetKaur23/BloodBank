const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
  res.json({ message: 'Admin users endpoint - to be implemented' });
});

module.exports = router;