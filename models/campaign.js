const mongoose = require("mongoose");

const campaignSchema = new mongoose.Schema({
	ngo: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "users",
		required: true
	},
	dateandtime: {
		type: Date,
		required: true
	},
	address: {
		type: String,
		required: true
	},
	phone: {
		type: Number,
		required: true
	},
    needtype:{
        type: String,
		required: true
    },
    quantity:{
        type: String,
		required: true
    },
    link:{
        type: String,
		required: true
    },
	// collectionTime: {
	// 	type: Date,
	// },
	// status: {
	// 	type: String,
	// 	enum: ["pending", "rejected", "accepted", "assigned", "collected"],
	// 	required: true
	// },
});

const Campaign = mongoose.model("campaigns", campaignSchema);
module.exports = Campaign;