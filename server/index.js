const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const { authenticateToken } = require('./middleware/auth');

dotenv.config();
const app = express();

app.use(cors({
  origin: ['https://gensler-website.onrender.com', 'http://localhost:3000'],
  credentials: true
}));

app.use(express.json());
app.use('/api/auth', authRoutes);

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

app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy' });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});