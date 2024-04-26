import connectDB from "@/utils/dbConfig";
import { NextResponse } from "next/server";
import { User } from "@/models/userModel";
import bcryptjs from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { cookies } from "next/headers";

connectDB();

export async function POST(request: Request) {
    try {
        const reqBody = await request.json();
        const { email, password } = reqBody;
        if (!email || !password) {
            return NextResponse.json({ message: 'Required fields missing', data: [] }, { status: 400 })
        }
        const user = await User.findOne({ email }).select('password email _id name role');
        if (!user) {
            return NextResponse.json({ message: 'User doesn\'t exists', data: [] }, { status: 400 })
        }
        if (user.role != 'Customer') {
            return NextResponse.json({ message: 'User doesn\'t exists', data: [] }, { status: 400 })
        }
        const isPasswordMatch = await bcryptjs.compare(password, user.password);
        if (!isPasswordMatch) {
            return NextResponse.json({ message: 'Invalid login credentials', data: [] }, { status: 400 })
        }
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET!, { expiresIn: '1d' });
        const userObj = user.toObject();
        delete userObj.password;
        cookies().set("token", token, {
            httpOnly: true,
            // secure: true
        });
        cookies().set("userType", user.role, {
            httpOnly: true,
            // secure: true
        });
        return NextResponse.json({ message: 'User Login successfully', data: userObj }, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: 'Internal Server Error', data: error }, { status: 500 })
    }
}