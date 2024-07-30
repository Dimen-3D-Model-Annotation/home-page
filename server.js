// server.js (or your main server file)
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const { Pool } = require('pg');
const pool = new Pool({ connectionString: 'postgresql://postgres:root@localhost:5432/dimen' });

// server.js (Add CORS configuration)
const cors = require('cors');

// Allow requests from frontend
app.use(cors({ origin: 'http://localhost:3000' }));


app.use(bodyParser.json());

app.post('/api/users', async (req, res) => {
  const { email, name} = req.body;
  
  try {
    const query = 'INSERT INTO dimen.users (email, name) VALUES ($1, $2) RETURNING *';
    const values = [email, name];
    const result = await pool.query(query, values);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// server.js

app.get('/api/userId', async (req, res) => {
    const { email } = req.query; // Assuming email is sent as a query parameter

    if (!email) {
    return res.status(400).send('Email parameter is missing');
  }
    
    try {
      const query = 'SELECT id FROM dimen.users WHERE email = $1';
      const values = [email];
      const result = await pool.query(query, values);
  
      if (result.rows.length > 0) {
        res.status(200).json({ userId: result.rows[0].id });
      } else {
        res.status(404).send('User not found');
      }
    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
  });
  

app.listen(3500, () => console.log('Server running on port 3500'));
