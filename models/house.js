const mongoose = require("mongoose")
const houseSchema = mongoose.Schema({
type: String,
colour: String,
rent: Number
})
module.exports = mongoose.model("house", houseSchema)