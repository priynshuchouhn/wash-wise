import connectDB from "@/utils/dbConfig";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { Product } from "@/models/productModel";

connectDB();

export async function GET(request: Request,) {
    try {
        const token = cookies().get('token');
        if (!token) {
            return NextResponse.json({ message: 'unauthorized user', data: [] }, { status: 500 })
        }
        const services = await Product.find();
        return NextResponse.json({ success: true, message: 'Services', data: services }, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: 'Internal Server Error', data: error }, { status: 500 })
    }
}