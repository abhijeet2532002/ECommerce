import mongoose from "mongoose";

const RatingSchema = new mongoose.Schema({
    number: {
        type: Number,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }
}, {
    timestamps: true
});

const Rating = mongoose.model('Rating', RatingSchema);
export default Rating;