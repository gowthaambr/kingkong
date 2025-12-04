const jwt = require('jsonwebtoken');
const env = require('../config/env');
const { AuthenticationError, AuthorizationError } = require('../utils/errors');

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

  if (!token) {
    return next(new AuthenticationError('Access token required'));
  }

  try {
    const decoded = jwt.verify(token, env.jwt.secret);
    req.userId = decoded.userId;
    req.restaurantId = decoded.restaurantId;
    req.role = decoded.role;
    next();
  } catch (error) {
    return next(new AuthenticationError('Invalid or expired token'));
  }
}

function requireRole(roles) {
  return (req, res, next) => {
    if (!roles.includes(req.role)) {
      return next(new AuthorizationError('Insufficient permissions'));
    }
    next();
  };
}

function optionalAuth(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return next();
  }

  try {
    const decoded = jwt.verify(token, env.jwt.secret);
    req.userId = decoded.userId;
    req.restaurantId = decoded.restaurantId;
    req.role = decoded.role;
  } catch (error) {
    // Token invalid, but continue without auth
  }
  next();
}

module.exports = { authenticateToken, requireRole, optionalAuth };
