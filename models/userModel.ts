import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: [true, 'Email is required'], unique: [true, 'Email already exists'] },
    password: { type: String, required: true },
    role: { type: String, enum: ['Admin', 'Customer', 'Delivery Partner'], default: 'Customer' },
    registrationDate: { type: Date, default: Date.now }
});

export const User = mongoose.models.user || mongoose.model('user', userSchema);

// module.exports = User;
