const http = require('http');
const { Server } = require('socket.io');

const app = require('./app');
const env = require('./config/env');
const logger = require('./utils/logger');
const db = require('./config/database');

const server = http.createServer(app);

// Socket.io setup
const io = new Server(server, {
  cors: {
    origin: env.cors.origins,
    credentials: true,
  },
});

// Socket.io connection handling
io.on('connection', (socket) => {
  logger.info(`Socket connected: ${socket.id}`);

  socket.on('join_restaurant', ({ restaurantId }) => {
    socket.join(`restaurant:${restaurantId}`);
    socket.emit('joined', { message: 'Connected to restaurant' });
    logger.info(`Socket ${socket.id} joined restaurant: ${restaurantId}`);
  });

  socket.on('disconnect', () => {
    logger.info(`Socket disconnected: ${socket.id}`);
  });
});

// Make io accessible to routes
app.set('io', io);

// Test database connection and start server
async function startServer() {
  try {
    // Test database connection
    await db.query('SELECT NOW()');
    logger.info('Database connection successful');

    server.listen(env.port, () => {
      logger.info(`Server running on port ${env.port} in ${env.nodeEnv} mode`);
    });
  } catch (error) {
    logger.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();

// Graceful shutdown
process.on('SIGTERM', () => {
  logger.info('SIGTERM received. Shutting down gracefully...');
  server.close(() => {
    logger.info('Server closed');
    db.pool.end(() => {
      logger.info('Database pool closed');
      process.exit(0);
    });
  });
});
