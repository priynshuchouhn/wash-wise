import connectDB from "@/utils/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import { User } from "@/models/userModel";
import Authorize from "@/utils/authorize";

connectDB();

export async function GET(request: NextRequest) {
    try {
        const token = request.cookies.get('token') || null;
        if(!token){
            return NextResponse.json({success: false , message: 'Token not found'}, {status: 400});
        }
        const isAuthorized = Authorize(token!.value);
        if(!isAuthorized){
            return NextResponse.json({success: false , message: 'Unauthorized user'}, {status: 403});
        }
        const lstCustomer = await User.find({role:'Customer'}).select('name email _id registrationDate');
       return NextResponse.json({message: 'Customer List Fetched Successfully', data:lstCustomer}, {status: 200});
    } catch (error: any) {
        return NextResponse.json({message: 'Internal Server Error', success: false, data:error}, {status: 500});
    }
}