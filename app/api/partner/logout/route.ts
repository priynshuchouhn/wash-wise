import connectDB from "@/utils/dbConfig";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

connectDB();

export async function GET(request: Request,) {
    try {
        cookies().delete('token');
        cookies().delete('userType');
        return NextResponse.json({ message: 'User Logged Out successfully', data: [] }, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: 'Internal Server Error', data: error }, { status: 500 })
    }
}