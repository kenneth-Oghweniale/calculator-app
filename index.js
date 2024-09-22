const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Basic route to check if the server is running
app.get('/', (req, res) => {
  res.send('Calculator API is running.');
});

// Addition Endpoint
app.post('/api/calculate/add', (req, res) => {
    const { num1, num2 } = req.body;
    const sum = num1 + num2;
    res.json({ result: sum });
  });
  
  // Subtraction Endpoint
  app.post('/api/calculate/subtract', (req, res) => {
    const { num1, num2 } = req.body;
    const difference = num1 - num2;
    res.json({ result: difference });
  });
  
  // Multiplication Endpoint
  app.post('/api/calculate/multiply', (req, res) => {
    const { num1, num2 } = req.body;
    const product = num1 * num2;
    res.json({ result: product });
  });
  
  // Division Endpoint
  app.post('/api/calculate/divide', (req, res) => {
    const { num1, num2 } = req.body;
    if (num2 === 0) {
      return res.status(400).json({ error: 'Division by zero is not allowed.' });
    }
    const quotient = num1 / num2;
    res.json({ result: quotient });
  });
  
  

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
