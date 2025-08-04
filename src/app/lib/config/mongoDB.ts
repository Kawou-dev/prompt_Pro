import mongoose from "mongoose";



export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI!) ;
        console.log("Mongo connected Successfully") ; 
        } catch (error) {
          console.error("Error : " , error)
    }
}