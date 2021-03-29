const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;



const OrderSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        },
            user_id: {
            type: ObjectId,
            ref: "User",
            required: true
        },
        email: {
            type: String,
            required: true,
            maxlength: 2000
        },
        price: {
            type: Number,
            trim: true,
            required: true,
            maxlength: 32
        },
        category: {
            type: String,
            required: true
        },
        delivaryAdd: {
            type: String,
            required: true,
            maxlength: 2000
        },
        pickupAdd: {
            type: String,
            required: true,
            maxlength: 2000
        },
        photo: {
            data: Buffer,
            contentType: String
        },
        date: {
            required: false,
            type: String
            },
            weight: {
              type:Number
    },
    delevary_phone: {
              type:Number
        },
        pickup_phone: {
              type:Number
        },
    trans: {
        type:String
        },
    order_type: {
        type:String
        },
        cat: {
        type:String
        },
        file_name: {
        type: String,
     
       
    },
    image: {
        type: String,
       
     
        }, status:{
        type: String,
        default:"pending"
    }
    },
    
    { timestamps: true }
);

const Order = mongoose.model("Order", OrderSchema);

module.exports = { Order };