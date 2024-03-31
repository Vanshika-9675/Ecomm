const mongoose = require("mongoose");
const Order = require('./order'); 

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    },
    orders: [Order.schema]
});

module.exports = mongoose.model("User", UserSchema);
