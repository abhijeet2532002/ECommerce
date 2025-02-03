import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    ProductName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    quantity: {
        type: Number,
        required: true,
        default: 0
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Seller'
    },
    rating: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Rating'
    }],
    image: [{
        type: String
    }],
    platformFee: {
        type: Number,
        required: true,
        default: 0
    }
}, {
    timestamps: true
});

const Product = mongoose.model('Product', productSchema);
export default Product;