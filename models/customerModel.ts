import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    address: { type: String },
    mobile: { type: String }
});

export const Customer = mongoose.models.customer|| mongoose.model('customer', customerSchema);

// module.exports = Customer;