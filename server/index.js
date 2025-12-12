const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const { authenticateToken } = require('./middleware/auth');
const db = require('./db');

dotenv.config();
const app = express();
app.use(cors());
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

app.get('/api/health', (req, res) => res.json({ ok: true }));

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
