import connectDB from "@/utils/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Authorize from "@/utils/authorize";
import { Order } from "@/models/orderModel";

connectDB();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { orderId, partnerId } = reqBody;
        if(!orderId || !partnerId){
            return NextResponse.json({success: false , message: 'Required fields missing'}, {status: 400});
        }
        const token = request.cookies.get('token');
        const isAuthorized = Authorize(token!.value);
        if(!isAuthorized){
            return NextResponse.json({success: false , message: 'Unauthorized user'}, {status: 403});
        }
        const order = await Order.findByIdAndUpdate(orderId, {$set: {
            partnerId : partnerId
        }})
        if(!order){
            return NextResponse.json({success: false , message: 'No Order found'}, {status: 400});
        }  
        return NextResponse.json({message: 'Delivery Partner Assigned Successfully', data:[]}, {status: 200});
    } catch (error) {
        console.log(error)
        return NextResponse.json({message: 'Internal Server Error', success: false, data:error}, {status: 500});
    }
}