

import connectDB from "@/utils/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import getDetailsFromToken from "@/utils/getDetailFromToken";
import { Order } from "@/models/orderModel";

connectDB();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { productId, quantity, totalPrice } = reqBody;
        const token = request.cookies.get('token') || null;
        if(!token){
            return NextResponse.json({success: false , message: 'Token not found'}, {status: 400});
        }
        const userData = getDetailsFromToken(token.value) as any;
        const order = new Order({
            customerId: userData.id,
            productId,
            quantity,
            totalPrice 
        })
        const savedOrder = await order.save();
       return NextResponse.json({message: 'Order added successfully', data: savedOrder}, {status: 200});
    } catch (error: any) {
        console.log(error);
        return NextResponse.json({message: 'Internal Server Error', success: false, data:error}, {status: 500});
    }
}