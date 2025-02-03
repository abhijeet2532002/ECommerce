import mongoose from 'mongoose';
import Validator from '../config/Validator.js';
const { emailValidator, usernameValidator, validatePhone } = new Validator();

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (value) => usernameValidator(value),
            message: "Username cannot be in email format"
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (value) => emailValidator(value),
            message: "Invalid email Id format"
        }
    },
    password: {
        type: String,
        required: true
    },
    authToken: {
        type: String
    },
    userRole: {
        type: String
    },
    cart: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }],
    wishlist: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }],
    order: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order'
    }],
    phone: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (value) => validatePhone(value),
            message: "Invalid phone number format",
        }
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Seller'
    },
    isSeller: {
        type: Boolean,
        default: false
    },
    issue: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Issue'
    }],
    image: {
        type: String
    }
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);
export default User;