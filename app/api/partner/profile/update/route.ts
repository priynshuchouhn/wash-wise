import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import * as jwt from 'jsonwebtoken';
import { DeliveryPartner } from "@/models/partnerModel";


export async function POST(request: Request,) {
    try {
        const reqBody = await request.json();
        const { address, mobile, vehicleType, vehicleRegNumber } = reqBody;
        if (!address || !mobile || !vehicleType || !vehicleRegNumber) {
            return NextResponse.json({ message: 'Required fields missing', data: [] }, { status: 400 })
        }
        const token = cookies().get('token');
        if (!token) {
            return NextResponse.json({ message: 'unauthorized user', data: [] }, { status: 500 })
        }
        const decodedCode = jwt.verify(token!.value, process.env.JWT_SECRET!) as any
        const userDetail = await DeliveryPartner.findOne({ userId: decodedCode.id })
        if (!userDetail) {
            const user = new DeliveryPartner({
                userId: decodedCode.id,
                address: address,
                mobile: mobile,
                vehicleType: vehicleType,
                vehicleRegNumber: vehicleRegNumber
            });
            const savedUser = await user.save();
            return NextResponse.json({ success: false, message: 'Partner Profile updated', data: savedUser }, { status: 200 })
        }
        const updatedUserDetail = await DeliveryPartner.findOneAndUpdate({ userId: decodedCode.id }, {
            $set: {
                mobile: mobile,
                address: address,
                vehicleType: vehicleType,
                vehicleRegNumber: vehicleRegNumber
            }
        })
        return NextResponse.json({ success: true, message: 'Partner Profile updated', data: updatedUserDetail }, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: 'Internal Server Error', data: error }, { status: 500 })
    }
}