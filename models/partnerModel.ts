import mongoose from "mongoose";

const deliveryPartnerSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    address: { type: String },
    mobile: { type: String },
    vehicleType: { type: String },
    vehicleRegNumber: { type: String }
});

export const DeliveryPartner = mongoose.models.deliveryPartner || mongoose.model('deliveryPartner', deliveryPartnerSchema);

// module.exports = DeliveryPartner;