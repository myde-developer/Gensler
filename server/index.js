const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const { authenticateToken } = require('./middleware/auth');

dotenv.config();
const app = express();

app.use(cors({
  origin: [
    'https://gensler-website.onrender.com', // Your frontend
    'http://localhost:3000',
    'http://localhost:5173'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Request logging
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

// Routes
app.use('/api/auth', authRoutes);

// Protected route
app.get('/api/site', authenticateToken, (req, res) => {
  res.json({
    hero: {
      title: 'Designing a better built environment',
      subtitle: 'Global architecture, design and planning firm',
    },
    sections: [
      { title: 'Work', description: 'Projects and case studies' },
      { title: 'People', description: 'Designers and leaders' },
      { title: 'Insights', description: 'Articles and announcements' }
    ]
  });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'healthy',
    service: 'Gensler API',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'production'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Server Error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});