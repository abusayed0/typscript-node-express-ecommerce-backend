// dependencies
import mongoose from "mongoose";
import config from "../config";


async function connectDB() {
    try {
    //  const connectionInstance =   await mongoose.connect(`mongodb+srv://${config.dbUser}:${config.dbPassword}@cluster0.gbdj4eh.mongodb.net/ecommerceBackend?retryWrites=true&w=majority&appName=Cluster0`);
     const connectionInstance =   await mongoose.connect(`mongodb://localhost:27017/ecommerceBackendLocal`);
        console.log(`MongoDB connected host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("db connect error:", error);
    }
};

export default connectDB;