const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const ordercreateation = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
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
            type: ObjectId,
            ref: "Category",
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
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Ordercreate", ordercreateation);