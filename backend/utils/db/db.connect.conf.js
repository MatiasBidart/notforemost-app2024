const mongoose = require('mongoose');
const config = require('../../config')

const connectDB = async () => {
  try {
    await mongoose.connect(config.connection);
    console.log('MongoDB connected');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
    // process.exit(1) 👨🏽‍💻 '1' code indicates that process end because of an Uncaught Error. See doc (bottom of it): "https://nodejs.org/api/process.html#processexitcode" 
  }
};

module.exports = connectDB;