const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Validation endpoint
app.post('/validation', (req, res) => {
    // Extract data from request
    const data = req.body;

    // Implement your validation logic here
    console.log('Validation request received:', data);

    // Respond with an appropriate JSON object
    res.json({
        ResultCode: 0,
        ResultDesc: data
    });
});

// Confirmation endpoint
app.post('/confirmation', (req, res) => {
    // Extract data from request
    const data = req.body;

    // Implement your confirmation logic here
    console.log('Confirmation request received:', data);

    // Respond with an appropriate JSON object
    res.json({
        ResultCode: 0,
        ResultDesc: 'Accepted'
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
