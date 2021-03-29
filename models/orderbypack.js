const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;



const OrderPackSchema = new mongoose.Schema(
    {
        user_name: {
            type: String,
        },
      user_id: {
            type: String,

        },
        pack_id: {
            type: String,

        },
        delivaryAdd: {
            type: String,

        },
        pickupAdd: {
            type: String,
 
        },
    phone: {
              type:Number
        },
   status:{
        type: String,
        default:"pending"
    }
    },
    
    { timestamps: true }
);

const OrderPack = mongoose.model("OrderPack", OrderPackSchema);

module.exports = { OrderPack };