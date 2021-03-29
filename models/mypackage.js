const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const PackageSchema = new mongoose.Schema(
    {
        user_name: {
            type: String,
            required: true,
 
        },
        user_id: {
            type: String,
            required: true,
         
        },
        pack_name: {
            type: String,
            required: true,
 
        },
        quantity: {
            type: Number
        },
      
        pack_id: {
            type: String,
            required: true,
        },
         validity: {
            type: Number
        },trans:{
            type:String
        },
        status: {
            type: String,
            default:"pending"
         }
        
    },
    { timestamps: true }
);

module.exports = mongoose.model("Mypackage", PackageSchema);