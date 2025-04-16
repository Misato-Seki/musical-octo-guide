// Define API routes
// node backend/server.js
const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();
app.use(cors());
app.use(express.json()); // Specify the request body as JSON format

// GET: all skills
app.get('/api/skills', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM skills')
        res.json(result.rows)        
    } catch (error) {
        res.status(500).json({ error: error.message });        
    }    
})

// POST: new skill
app.post('/api/skills', async(req, res) => {
    try {
        const result = await pool.query('INSERT INTO skills (name) VALUES ($1) RETURNING *', [req.body.name])
        res.json(result.rows[0])
    } catch (error) {
        res.status(500).json({ error: error.message });        
    }
    
})

// run server
const PORT = 8000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));