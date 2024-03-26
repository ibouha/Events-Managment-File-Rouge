import mongoose from "mongoose" ;
import dotenv from "dotenv";

dotenv.config();
const MONGODB_URI=process.env.MONGODB_URL;

const connect = async () =>{
    try {
        await mongoose.connect(MONGODB_URI!,{
            dbName:"eventify",

        });
        console.log("Connected to MongoDB");
        
    } catch (error) {

        throw new Error("Could not connect to MongoDB")
        
    }
}
    
export default connect;