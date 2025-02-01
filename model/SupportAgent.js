import mongoose from 'mongoose';

const supportAgentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        enum: ['Customer', 'Seller', 'Delivery'],
        required: true
    },
    issue: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Issue'
    }],
    status: {
        type: String,
        enum: ['Available', 'Busy', 'Offline'],
        default: 'Available'
    }
}, {
    timestamps: true
});

const SupportAgent = mongoose.model('SupportAgent', supportAgentSchema);
export default SupportAgent;