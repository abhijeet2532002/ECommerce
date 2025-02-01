import mongoose from "mongoose";

const issueSchema = new mongoose.Schema({
    userType: {
        type: String,
        enum: ["customer", "seller", "delivery_agent"],
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        refPath: "userType"
    },
    issueCategory: {
        type: String,
        required: true,
        enum: ["order_issue", "payment_issue", "delivery_issue", "product_issue", "account_issue", "other"]
    },
    issueDescription: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["open", "in_progress", "resolved", "closed"],
        default: "open"
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    resolvedAt: {
        type: Date
    },
    resolutionDetails: {
        type: String
    },
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "SupportAgent"
    }
});

const Issue = mongoose.model("SupportTicket", issueSchema);
export default Issue;