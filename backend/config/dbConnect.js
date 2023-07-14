import mongoose from "mongoose";

const connectDB = async () => {
    mongoose.connect('mongodb://127.0.0.1:27017/cms')
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch((error) => {
            console.log('Error connecting to MongoDB', error);
            process.exit(1);
        })
}

export default connectDB;