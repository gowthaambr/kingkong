const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middleware/auth.middleware');

// All routes require authentication
router.use(authenticateToken);

// Categories
router.get('/categories', (req, res) => {
  res.json({ success: true, message: 'List categories - TODO' });
});

router.post('/categories', (req, res) => {
  res.json({ success: true, message: 'Create category - TODO' });
});

router.get('/categories/:id', (req, res) => {
  res.json({ success: true, message: 'Get category - TODO' });
});

router.put('/categories/:id', (req, res) => {
  res.json({ success: true, message: 'Update category - TODO' });
});

router.delete('/categories/:id', (req, res) => {
  res.json({ success: true, message: 'Delete category - TODO' });
});

// Items
router.get('/items', (req, res) => {
  res.json({ success: true, message: 'List items - TODO' });
});

router.post('/items', (req, res) => {
  res.json({ success: true, message: 'Create item - TODO' });
});

router.get('/items/:id', (req, res) => {
  res.json({ success: true, message: 'Get item - TODO' });
});

router.put('/items/:id', (req, res) => {
  res.json({ success: true, message: 'Update item - TODO' });
});

router.delete('/items/:id', (req, res) => {
  res.json({ success: true, message: 'Delete item - TODO' });
});

router.put('/items/:id/availability', (req, res) => {
  res.json({ success: true, message: 'Toggle availability - TODO' });
});

module.exports = router;
