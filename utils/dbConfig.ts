import mongoose from "mongoose"

const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_DB_URL!)
        const connection = mongoose.connection

        connection.on('connected', ()=>{
            console.log('successfully connected to MongoDB')
        })
        connection.on('error', (error)=>{
            console.log('Error connecting to MongoDB: ' + error);
            process.exit(1);
        })
    } catch (error) {
        console.log('something went wrong while connecting to database: ' + error)
    }
}

export default connectDB;