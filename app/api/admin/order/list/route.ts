import connectDB from "@/utils/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Authorize from "@/utils/authorize";
import { Order } from "@/models/orderModel";

connectDB();

export async function GET(request: NextRequest) {
    try {
        const token = request.cookies.get('token');
        const isAuthorized = Authorize(token!.value);
        if(!isAuthorized){
            return NextResponse.json({success: false , message: 'Unauthorized user'}, {status: 403});
        }
        const lstOrder = await Order.find()
        .populate({
          path: 'customerId',
          model: 'user' 
        })
        .populate({
          path: 'productId',
          model: 'product'
        })      
        .populate({
          path: 'partnerId',
          model: 'user'
        });       
        return NextResponse.json({message: 'Delivery Partner List Fetched Successfully', data:lstOrder}, {status: 200});
    } catch (error) {
        console.log(error)
        return NextResponse.json({message: 'Internal Server Error', success: false, data:error}, {status: 500});
    }
}