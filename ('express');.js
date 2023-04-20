const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware to parse incoming request bodies
app.use(bodyParser.json());

// Example endpoint for handling login requests
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Add your code to handle login here
  if (email === 'example@example.com' && password === 'password123') {
    res.status(200).json({ message: 'User logged in successfully!' });
  } else {
    res.status(401).json({ error: 'Invalid email or password' });
  }
});

// Example endpoint for handling orders
app.post('/orders', (req, res) => {
  // Add your code to handle order creation here
  res.status(201).json({ message: 'Order created successfully!' });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});