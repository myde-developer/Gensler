const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../db');
const { authenticateToken } = require('../middleware/auth');
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET || 'secret_default';

// REGISTER
router.post('/register', async (req, res) => {
  console.log('Registration attempt:', req.body.email);
  
  try {
    const { name, email, password } = req.body;
    
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password required' });
    }
    
    // Hash password
    const hashed = await bcrypt.hash(password, 10);
    
    // Insert user
    const result = await db.query(
      'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email',
      [name, email, hashed]
    );
    
    const user = result.rows[0];
    
    // Create token
    const token = jwt.sign(
      { id: user.id, email: user.email }, 
      JWT_SECRET, 
      { expiresIn: '7d' }
    );
    
    res.json({ 
      message: 'Registration successful',
      user, 
      token 
    });
    
  } catch (err) {
    console.error('Registration error:', err);
    
    if (err.code === '23505') {
      return res.status(400).json({ error: 'Email already exists' });
    }
    
    res.status(500).json({ error: 'Registration failed' });
  }
});

// LOGIN
router.post('/login', async (req, res) => {
  console.log('Login attempt:', req.body.email);
  
  try {
    const { email, password } = req.body;
    
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password required' });
    }
    
    // Find user
    const result = await db.query(
      'SELECT id, name, email, password FROM users WHERE email = $1', 
      [email]
    );
    
    const user = result.rows[0];
    
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    // Check password
    const match = await bcrypt.compare(password, user.password);
    
    if (!match) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    // Create token
    const token = jwt.sign(
      { id: user.id, email: user.email }, 
      JWT_SECRET, 
      { expiresIn: '7d' }
    );
    
    delete user.password;
    
    res.json({ 
      message: 'Login successful',
      user, 
      token 
    });
    
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ error: 'Login failed' });
  }
});

// GET USER PROFILE
router.get('/me', authenticateToken, async (req, res) => {
  try {
    const result = await db.query(
      'SELECT id, name, email FROM users WHERE id = $1', 
      [req.user.id]
    );
    
    const user = result.rows[0];
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    res.json({ user });
    
  } catch (err) {
    console.error('Profile error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;