import mongoose, { Schema, model, Document } from 'mongoose';


export const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://vishalmoharikar_db_user:iHlBUTT5MqbxGvwJ@vmin-mongo.kbfgrpn.mongodb.net/?appName=VMIN-Mongo');

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error: any) {

    console.error(`❌ Error: ${error.message}`);
    process.exit(1); // Exit process with failuress
  }
};

