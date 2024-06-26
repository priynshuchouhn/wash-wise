import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'customer', required: true },
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'product', required: true },
    partnerId: { type: mongoose.Schema.Types.ObjectId, ref: 'deliveryPartner',},
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    orderDate: { type: Date, default: Date.now },
    status: { type: String, enum: ['Pending', 'Picked', 'In Process', 'Completed'], default: 'Pending' }
});

export const Order = mongoose.models.order || mongoose.model('order', orderSchema);

