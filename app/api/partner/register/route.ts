import connectDB from "@/utils/dbConfig";
import { NextResponse } from "next/server";
import { User } from "@/models/userModel";
import bcryptjs from 'bcryptjs';

connectDB();

export async function POST(request: Request) {
   try {
      const reqBody = await request.json();
      const { name, email, password } = reqBody;
      if (!name || !email || !password) {
         return NextResponse.json({ message: 'Required fields missing', data: [] }, { status: 400 })
      }
      const salt = await bcryptjs.genSalt(10);
      const hashedPassword = await bcryptjs.hash(password, salt);
      const user = new User({ name, email, password: hashedPassword, role: 'Delivery Partner'});
      const savedUser = await user.save();
      return NextResponse.json({ message: 'User Registered successfully', data: savedUser }, { status: 200 })
   } catch (error) {
      console.log(error)
      return NextResponse.json({ message: 'Internal Server Error', data: error }, { status: 500 })
   }
}