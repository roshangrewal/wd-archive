const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes

// create a todo
app.post('/todo', async(req, res) => {
  try {
    const {description} = req.body;
    const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1)", [description]);
    
  } catch (err) {
    console.log(err.message);
    
  }
})

// get all todo

// get a todo

app.listen(8000, () => {
  console.log('Server has started on port 8000');
});
