import mongoose from 'mongoose';

const stockSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Product"
    },
    quantity: {
        type: Number,
        required: true,
        min: 0
    }
}, {
    timestamps: true
});

const Stock = mongoose.model("Stock", stockSchema);
export default Stock;