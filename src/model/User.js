import mongoose from 'mongoose';
import Validator from '../config/Validator.js';
const { emailValidator, usernameValidator, validatePhone ,pincodeValidator} = new Validator();

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        trim: true,
        required: [true,"Username is required..."],
        unique: true,
        validate: {
            validator: (value) => usernameValidator(value),
            message: "Username cannot be in email format"
        }
    },
    email: {
        type: String,
        trim: true,
        required: [true, "Email is required..."],
        unique: true,
        validate: {
            validator: (value) => emailValidator(value),
            message: "Invalid email Id format"
        }
    },
    password: {
        type: String,
        trim: true,
        required: true
    },
    authToken: {
        type: String,
        trim: true
    },
    userRole: {
        type: String,
        trim: true
    },
    cart: [{
        type: mongoose.Schema.Types.ObjectId,
        trim: true,
        ref: 'Product'        
    }],
    wishlist: [{
        type: mongoose.Schema.Types.ObjectId,
        trim: true,
        ref: 'Product'
    }],
    order: [{
        type: mongoose.Schema.Types.ObjectId,
        trim: true,
        ref: 'Order'
    }],
    phone: {
        type: String,
        trim: true,
        required: [true, "Phone number is required..."],
        unique: true,
        validate: {
            validator: (value) => validatePhone(value),
            message: "Invalid phone number format",
        }
    },
    address: [{
        street: {
            type: String,
            trim: true,
            required: [true, "Street is required..."],
        },
        city: {
            type: String,
            trim: true,
            required: [true, "City is required..."],
        },
        state: {
            type: String,
            trim: true,
            required: [true, "State is required..."],
        },
        country: {
            type: String,
            trim: true,
            required: [true, "Country is required..."],
        },
        pincode: {
            type: String,
            trim: true,
            required: [true, "Pincode is required..."],
            validate: {
                validator: (value) => pincodeValidator(value),
                message: "PIN Code is only the length of 6 Character"
            }
        }
    }],
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        trim: true,
        ref: 'Seller'
    },
    isSeller: {
        type: Boolean,
        trim: true,
        default: false
    },
    issue: [{
        type: mongoose.Schema.Types.ObjectId,
        trim: true,
        ref: 'Issue'
    }],
    image: {
        type: String,
        trim: true
    }
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);
export default User;