const connectDB = require('../config/db');

// Function to insert a new user into the 'users' table
const insertUser = async (name, age, selectedBatch) => {
  try {
    const connection = await connectDB();
    const [rows] = await connection.execute('INSERT INTO users (name, age, selected_batch) VALUES (?, ?, ?)', [
      name,
      age,
      selectedBatch,
    ]);
    connection.end();
    return rows.insertId; // Return the ID of the inserted user
  } catch (error) {
    console.error('Error inserting user:', error);
    throw new Error('Error inserting user');
  }
};

module.exports = {
  insertUser,
};
