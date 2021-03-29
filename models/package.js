const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const PackageSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        },
        description: {
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
        quantity: {
            type: Number
        },
      
        photo: {
            data: Buffer,
            contentType: String
        },
         validity: {
            type: String
        },
        
    },
    { timestamps: true }
);

module.exports = mongoose.model("Package", PackageSchema);