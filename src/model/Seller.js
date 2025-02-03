import mongoose from 'mongoose';

const sellerSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    businessName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
        required: true
    },
    address: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        country: { type: String, required: true },
        pincode: { type: String, required: true }
    },
    product: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }],
    order: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order'
    }]
}, {
    timestamps: true
});

const Seller = mongoose.model('Seller', sellerSchema);
export default Seller;