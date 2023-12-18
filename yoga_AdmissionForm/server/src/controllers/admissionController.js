const connectDB = require('../config/db');

const submitAdmission = async (req, res) => {
  try {
    // Basic validations
    const { name, age, selectedBatch } = req.body;
    if (!name || !age || !selectedBatch) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Connect to MySQL
    const connection = await connectDB();

    // Insert user data into the 'users' table
    const [rows] = await connection.execute('INSERT INTO users (name, age, selected_batch) VALUES (?, ?, ?)', [
      name,
      age,
      selectedBatch,
    ]);

    
    // Call the mock payment function
    const paymentResponse = CompletePayment(); // Pass the necessary details

    // Close the database connection
    connection.end();

    // Return response to front-end based on payment response
    if (paymentResponse.success) {
      return res.status(200).json({ message: 'Admission successful', paymentResponse, userId: rows.insertId });
    } else {
      return res.status(500).json({ error: 'Payment failed', paymentResponse });
    }
  } catch (error) {
    console.error('Error submitting admission:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  submitAdmission,
};
