const express = require('express');
const consultationRoutes = require('./routes/consultationRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const cors = require('cors');


// Initialize Express app
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true })); // for html form data
app.use(express.json());

//routes
app.use("/api/consultation", consultationRoutes);
app.use("/api/booking", bookingRoutes);

//health check route
app.get('/', (req, res) => {
    res.send('API is running...');
});

//404 route
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

//error
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Server Error', error: err.message });
});

module.exports = app;