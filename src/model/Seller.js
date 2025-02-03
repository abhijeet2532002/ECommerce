import mongoose from 'mongoose';
import Validator from '../config/Validator.js';

const { emailValidator, validatePhone, pincodeValidator } = new Validator();

const sellerSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "Please enter user id"],
        trim: true
    },
    businessName: {
        type: String,
        required: [true, "Please enter business name"],
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
    address: {
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