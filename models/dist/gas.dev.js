"use strict";

var mongoose = require("mongoose");

var gasSchema = mongoose.Schema({
  gas_type: String,
  quantity: {
    type: Number,
    min: 1,
    max: 30
  },
  cost: {
    type: Number,
    min: 3,
    max: 100
  }
});
module.exports = mongoose.model("Gas", gasSchema);