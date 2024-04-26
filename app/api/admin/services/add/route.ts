import connectDB from "@/utils/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Authorize from "@/utils/authorize";
import { Product } from "@/models/productModel";

connectDB();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { data } = reqBody;
        const token = request.cookies.get('token') || null;
        if(!token){
            return NextResponse.json({success: false , message: 'Token not found'}, {status: 400});
        }
        const isAuthorized = Authorize(token!.value);
        if(!isAuthorized){
            return NextResponse.json({success: false , message: 'Unauthorized user'}, {status: 403});
        }
        const validationErrors: string[] = [];
        if(data.length <= 0){
            return NextResponse.json({success: false , message: 'No Data Found'}, {status: 400});

        }
        data.forEach((product: {name: string, description: string, price: number}) => {
          if (!product.name || typeof product.name !== 'string' || product.name.trim() === '') {
            validationErrors.push('Name is required and cannot be empty');
          }
          if (!product.description || typeof product.description !== 'string' || product.description.trim() === '') {
            validationErrors.push('Description is required and cannot be empty');
          }
          if (!product.price || typeof product.price !== 'number' || product.price <= 0) {
            validationErrors.push('Price must be a positive number');
          }
        });
        if (validationErrors.length > 0) {
            // Validation failed, return error response
            return NextResponse.json({message: 'Required Fields missing', data:validationErrors}, {status: 400}); 
        }
        const services = await Product.insertMany(data);
       return NextResponse.json({message: 'Services added successfully', data: services}, {status: 200});
    } catch (error: any) {
        console.log(error);
        return NextResponse.json({message: 'Internal Server Error', success: false, data:error}, {status: 500});
    }
}