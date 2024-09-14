import mongoose from "mongoose";

const Connection = async () => {
    try {
        await mongoose.connect(process.env.db_url)
        console.log("database connected");
        
    } catch (error) {
        console.log(error);
        
    }
}

export default Connection;