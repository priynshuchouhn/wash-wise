import { Customer } from "@/models/customerModel"
import { Order } from "@/models/orderModel"
import { DeliveryPartner } from "@/models/partnerModel"
import { Product } from "@/models/productModel"
import { User } from "@/models/userModel"
import mongoose from "mongoose"

const connection: any = {}

const connectDB = async () => {
    try {
        // if (connection.isConnected) return
        // const db = await mongoose.
        //     connect(process.env.MONGO_DB_URL!)
        // console.log('connection to db completed');
        // connection.isConnected = db.connections[0].readyState
        mongoose.connect(process.env.MONGO_DB_URL!)
        const connection = mongoose.connection

        connection.on('connected', () => {
            console.log('successfully connected to MongoDB')
            const models = {
                User,
                Product,
                Customer,
                Order,
                DeliveryPartner
                // other models
            };
            return models

        })
        connection.on('error', (error) => {
            console.log('Error connecting to MongoDB: ' + error);
            process.exit(1);
        })


    } catch (error) {
        console.log('something went wrong while connecting to database: ' + error)
    }
}

export default connectDB;