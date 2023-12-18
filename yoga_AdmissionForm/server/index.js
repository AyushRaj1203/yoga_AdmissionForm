const express = require('express');
const cors = require('cors');
const connectDB = require('./src/config/db');
const admissionRoutes = require('./src/routes/admissionRoutes');

const app = express();

// Connect to MySQL
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/admission', admissionRoutes);

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
