const mongoose = require("mongoose")
const houseSchema = mongoose.Schema({
type: {
    type: String,
    required: [true, "house type is Required"]
},
colour: {
    type: String,
    minimumLength: 10
},

rent: {
    type: Number,

        min:[500,"Minimum rent for house"],
        max:[1000,"Maximum rent for house"]
}

})
module.exports = mongoose.model("house", houseSchema)