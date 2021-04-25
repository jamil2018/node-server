import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`MONGODB Connected ${conn.connection.host}`.green.underline);
  } catch (err) {
    console.error(`Error: ${err.message}`.red.underline.bold);
  }
};

export default connectDB;
