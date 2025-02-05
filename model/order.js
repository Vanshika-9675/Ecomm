const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
     image:{
        type:String,
        required:true,  
     },
     price:{
        type:Number,
     },
     quantity:{
        type:Number,
     },
     totalprice:{
        type:Number
     }
})

const Order = mongoose.model('order', orderSchema);
module.exports = Order;