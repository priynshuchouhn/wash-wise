import { Order } from "@/models/orderModel";
import connectDB from "@/utils/dbConfig";
import getDetailsFromToken from "@/utils/getDetailFromToken";
import { NextRequest, NextResponse } from "next/server";


connectDB();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { orderId } = reqBody;
        const token = request.cookies.get('token') || null;
        if (!token) {
            return NextResponse.json({ success: false, message: 'Token not found' }, { status: 400 });
        }
        if (!orderId) {
            return NextResponse.json({ success: false, message: 'Required Field Missing' }, { status: 400 });
        }
        const userData = getDetailsFromToken(token.value) as any;
        const order = await Order.findOneAndUpdate({ partnerId: userData.id, _id: orderId }, { $set: { status: 'Picked' } });
        return NextResponse.json({ message: 'Orders updated successfully', data: order }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: 'Internal Server Error', success: false, data: error }, { status: 500 });
    }
}