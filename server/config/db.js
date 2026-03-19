const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://vishalmoharikar_db_user:iHlBUTT5MqbxGvwJ@vmin-mongo.kbfgrpn.mongodb.net/?appName=VMIN-Mongo');

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;