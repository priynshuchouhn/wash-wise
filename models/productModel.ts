import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    unit: { type: String, required: true }
});

export const Product =mongoose.models.product || mongoose.model('product', productSchema);

