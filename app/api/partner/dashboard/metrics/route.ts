import connectDB from "@/utils/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Authorize from "@/utils/authorize";
import { Order } from "@/models/orderModel";
import { User } from "@/models/userModel";
import getDetailsFromToken from "@/utils/getDetailFromToken";

connectDB();

export async function GET(request: NextRequest) {
    try {
        const token = request.cookies.get('token');
        if(!token){
            return NextResponse.json({success: false , message: 'Token not found'}, {status: 400});
        }
        const userData = getDetailsFromToken(token.value) as any;
        const completedOrders = await Order.find({status: 'Completed', partnerId: userData.id}).countDocuments();
        const pendingOrders= await Order.find({status: 'Pending', partnerId: userData.id}).countDocuments();
        console.log(userData._id);
    return NextResponse.json({message: 'Partner Metrics Fetched Successfully', data:{completedOrders: completedOrders, earnings: 0, pendingOrders: pendingOrders}}, {status: 200});
    } catch (error) {
        console.log(error)
        return NextResponse.json({message: 'Internal Server Error', success: false, data:error}, {status: 500});
    }
}