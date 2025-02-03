import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String
    },
    parentCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        default: null
    },
    image: {
        type: String
    },
    brands: [{ type: String }],
    isActive: {
        type: Boolean, default: true
    }
}, {
    timestamps: true
});

const Category = mongoose.model('Category', CategorySchema);
export default Category;