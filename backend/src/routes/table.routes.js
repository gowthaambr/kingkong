const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middleware/auth.middleware');

// All routes require authentication
router.use(authenticateToken);

router.get('/', (req, res) => {
  res.json({ success: true, message: 'List tables - TODO' });
});

router.post('/', (req, res) => {
  res.json({ success: true, message: 'Create table - TODO' });
});

router.get('/:id', (req, res) => {
  res.json({ success: true, message: 'Get table - TODO' });
});

router.put('/:id', (req, res) => {
  res.json({ success: true, message: 'Update table - TODO' });
});

router.delete('/:id', (req, res) => {
  res.json({ success: true, message: 'Delete table - TODO' });
});

router.post('/:id/generate-qr', (req, res) => {
  res.json({ success: true, message: 'Generate QR - TODO' });
});

router.get('/download-qrs', (req, res) => {
  res.json({ success: true, message: 'Download QRs - TODO' });
});

module.exports = router;
