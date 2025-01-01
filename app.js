const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./utils/db');
const errorHandler = require('./utils/errorHandler');
const rateLimiter = require('./utils/rateLimiter');

const routes = require('./routes/index');

dotenv.config();

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());
app.use(rateLimiter);

app.get('/', (req, res) => { 
    res.send('Server is running!'); 
});

// Routes
app.use('/api', routes);

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
