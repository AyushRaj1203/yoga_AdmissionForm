const mysql = require('mysql2/promise');

const connectDB = async () => {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'Ayushraj@12@',
      database: 'yoga_class_db',
    });

    console.log('Connected to MySQL');
    return connection;
  } catch (error) {
    console.error('Error connecting to MySQL:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
