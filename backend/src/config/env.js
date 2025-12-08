require('dotenv').config();

module.exports = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT, 10) || 5000,

  db: {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT, 10) || 5432,
    name: process.env.DB_NAME || 'restaurant_os_dev',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || '',
  },

  jwt: {
    secret: process.env.JWT_SECRET || 'dev-secret',
    expiry: process.env.JWT_EXPIRY || '24h',
  },

  upload: {
    dir: process.env.UPLOAD_DIR || './uploads',
    maxSize: parseInt(process.env.MAX_FILE_SIZE, 10) || 5242880, // 5MB
  },

  cors: {
    origins: [
      process.env.ADMIN_URL || 'http://localhost:5173',
      process.env.CUSTOMER_URL || 'http://localhost:5174',
      process.env.MARKETING_URL || 'http://localhost:3000',
    ],
  },
};
