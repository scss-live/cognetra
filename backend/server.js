const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
require('dotenv').config();

// Import routes
const authRoutes = require('./routes/auth.routes');
const serviceRoutes = require('./routes/service.routes');
const contactRoutes = require('./routes/contact.routes');
const blogRoutes = require('./routes/blog.routes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/blogs', blogRoutes);

// Test route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Cognetra API' });
});

const PORT = process.env.PORT || 5000;

// Database connection and server start
async function startServer() {
    try {
        await sequelize.authenticate();
        console.log('Database connection established successfully.');
        
        await sequelize.sync();
        console.log('Database synchronized');

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Unable to start server:', error);
    }
}

startServer();
