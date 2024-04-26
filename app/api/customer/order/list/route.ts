import connectDB from "@/utils/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import getDetailsFromToken from "@/utils/getDetailFromToken";
import { Order } from "@/models/orderModel";

connectDB();

export async function GET(request: NextRequest) {
    try {
        const token = request.cookies.get('token') || null;
        if(!token){
            return NextResponse.json({success: false , message: 'Token not found'}, {status: 400});
        }
        const userData = getDetailsFromToken(token.value) as any;
        const lstOrder = await Order.find({customerId: userData.id});
       return NextResponse.json({message: 'Orders Fetched successfully', data: lstOrder}, {status: 200});
    } catch (error: any) {
        console.log(error);
        return NextResponse.json({message: 'Internal Server Error', success: false, data:error}, {status: 500});
    }
}