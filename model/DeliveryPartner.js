import mongoose from "mongoose";

const deliveryPartnerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    order: [{
        type: mongoose.Schema.Types.String,
        ref: 'Order'
    }],
    status: {
        type: String,
        enum: ['Available', 'On Delivery'],
        default: 'Available'
    },
    address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address'
    },
    issue: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Issue'
    }]
});

const DeliveryPartner = mongoose.model('DeliveryPartner', deliveryPartnerSchema);
export default DeliveryPartner;