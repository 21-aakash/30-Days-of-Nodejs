// Import required modules
const express = require('express');

// Create an Express application
const app = express();

// Middleware function to log requests
app.use((req, res, next) => {
    console.log(`Request received: ${req.method} ${req.url}`);
    next();
});

// Homepage route
app.get('/', (req, res) => {
    res.send('Welcome to the homepage!');
});

// Middleware function to check if user is authenticated
const checkAuth = (req, res, next) => {
    // Assume authentication logic here (e.g., checking if user is logged in)
    const isAuthenticated = true; // For simplicity, let's assume the user is always authenticated

    if (isAuthenticated) {
        next(); // Proceed to the next middleware/route handler
    } else {
        res.status(401).send('Unauthorized. Please log in.');
    }
};

// Secret page route that requires authentication
app.get('/secret', checkAuth, (req, res) => {
    res.send('Welcome to the secret page!');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
