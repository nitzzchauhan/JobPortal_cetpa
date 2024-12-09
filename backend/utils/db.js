import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://nitinkeshavchauhan:Ce9JXlFokJemITBV@cluster0.n4wmu.mongodb.net/JobPortal202042");
        // await mongoose.connect(process.env.MONGO_URI);
        console.log('mongodb connected successfully');
    } catch (error) {
        console.log(error);
    }
}
export default connectDB;