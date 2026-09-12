require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Models
const User = require('./models/User');
const Scheme = require('./models/Scheme');
const Donation = require('./models/Donation');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Database Connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// Auth Middleware
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

// --- AUTH ROUTES ---

app.post('/api/auth/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, email, password: hashedPassword });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(400).json({ error: 'Email already exists' });
    }
});

app.post('/api/auth/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user._id, name: user.name }, process.env.JWT_SECRET);
    res.json({ token, name: user.name });
});

// --- AI CHAT ROUTE (OLLAMA) ---

app.post('/api/chat', async (req, res) => {
    try {
        const { prompt, userName } = req.body;
        
        // Ollama local endpoint
        const OLLAMA_URL = 'http://localhost:11434/api/generate';
        const model = process.env.OLLAMA_MODEL || 'llama3';

        const greeting = userName ? `The user's name is ${userName}.` : "The user is anonymous.";
        
        const response = await axios.post(OLLAMA_URL, {
            model: model,
            prompt: `You are Saarthi, an empathetic healthcare guide assistant. 
            ${greeting}
            Your goal is to provide instant, reliable information for hospital admissions, government schemes (like Ayushman Bharat), and medical resources.
            Be helpful, calming, and concise. 
            
            User Query: ${prompt}`,
            stream: false
        });

        if (response.data && response.data.response) {
            res.json({ response: response.data.response });
        } else {
            res.json({ response: "I'm sorry, I'm having trouble connecting to my local AI engine. Please ensure Ollama is running." });
        }
    } catch (error) {
        res.status(500).json({ 
            error: 'Ollama Error', 
            details: "Could not connect to Ollama. Run 'ollama serve' and ensure the model is pulled.",
            message: error.message 
        });
    }
});

// --- DYNAMIC DATA ROUTES ---

// Get all schemes
app.get('/api/schemes', async (req, res) => {
    const schemes = await Scheme.find();
    res.json(schemes);
});

// Post a blood donation request
app.post('/api/donations', async (req, res) => {
    try {
        const donation = new Donation(req.body);
        await donation.save();
        res.status(201).json(donation);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get recent donation requests
app.get('/api/donations', async (req, res) => {
    const donations = await Donation.find().sort({ createdAt: -1 }).limit(10);
    res.json(donations);
});

app.listen(PORT, () => {
    console.log(`Saarthi server running on http://localhost:${PORT}`);
});
