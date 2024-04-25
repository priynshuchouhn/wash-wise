import mongoose from "mongoose"

const connection: any = {}

const connectDB = async () => {
    try {
        if (connection.isConnected) return
        const db = await mongoose.
            connect(process.env.MONGO_DB_URL!)

        connection.isConnected = db.connections[0].readyState
        // mongoose.connect(process.env.MONGO_DB_URL!)
        // const connection = mongoose.connection

        // connection.on('connected', ()=>{
        //     console.log('successfully connected to MongoDB')
        // })
        // connection.on('error', (error)=>{
        //     console.log('Error connecting to MongoDB: ' + error);
        //     process.exit(1);
        // })


    } catch (error) {
        console.log('something went wrong while connecting to database: ' + error)
    }
}

export default connectDB;