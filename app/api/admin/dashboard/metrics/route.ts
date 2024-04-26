import connectDB from "@/utils/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Authorize from "@/utils/authorize";
import { Order } from "@/models/orderModel";
import { User } from "@/models/userModel";

connectDB();

export async function GET(request: NextRequest) {
    try {
        const token = request.cookies.get('token');
        const isAuthorized = Authorize(token!.value);
        if(!isAuthorized){
            return NextResponse.json({success: false , message: 'Unauthorized user'}, {status: 403});
        }
        const countOrder = await Order.countDocuments();
        const countUser= await User.find({role: 'Customer'}).countDocuments();
        const countPartner= await User.find({role: 'Delivery Partner'}).countDocuments();

    return NextResponse.json({message: 'Delivery Partner List Fetched Successfully', data:{orders: countOrder, customer: countUser, partner: countPartner}}, {status: 200});
    } catch (error) {
        console.log(error)
        return NextResponse.json({message: 'Internal Server Error', success: false, data:error}, {status: 500});
    }
}