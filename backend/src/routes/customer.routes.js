const express = require('express');
const router = express.Router();

// Public routes - no authentication required

router.get('/menu/:restaurantSlug/:tableToken', (req, res) => {
  res.json({ success: true, message: 'Get menu for QR scan - TODO' });
});

router.post('/orders', (req, res) => {
  res.json({ success: true, message: 'Place order - TODO' });
});

router.get('/orders/:id', (req, res) => {
  res.json({ success: true, message: 'Get order status - TODO' });
});

module.exports = router;
