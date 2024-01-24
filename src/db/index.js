import mongoose from "mongoose";
import DB_NAME from "../constant.js";
const connectdb = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log("database connected successfully");
    console.log(connectionInstance.connection.host);
  } catch (error) {
    console.log(error);
  }
};
export { connectdb };
