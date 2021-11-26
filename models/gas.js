const mongoose = require("mongoose")
const gasSchema = mongoose.Schema({
    gas_type: String,
    quantity: Number,
    cost:{type:Number,min:15,max:100}
})
module.exports = mongoose.model("Gas",
    gasSchema)