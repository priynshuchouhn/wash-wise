import connectDB from "@/utils/dbConfig";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import * as jwt from 'jsonwebtoken';
import { Customer } from "@/models/customerModel";
import { User } from "@/models/userModel";

connectDB();

export async function GET(request: Request,) {
    try {
        const token = cookies().get('token');
        if(!token){
            return NextResponse.json({ message: 'unauthorized user', data: [] }, { status: 500 })
        }
        const decodedCode = jwt.verify(token!.value, process.env.JWT_SECRET!) as any
        const userDetail = await Customer.findOne({userId: decodedCode.id}).populate('userId')
        if(!userDetail){
            const user = await User.findById(decodedCode.id).select('-password')
            return NextResponse.json({ success:false, message: 'Customer Profile fetched without detail', data: user }, { status: 200 })
        }
        return NextResponse.json({ success:true, message: 'Customer Profile fetched without detail', data: userDetail }, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: 'Internal Server Error', data: error }, { status: 500 })
    }
}