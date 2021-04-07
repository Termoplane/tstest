const {Schema, model} = require("mongoose")

const occasion = new Schema({
    occasion: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    time: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    important: {
        type: Boolean,
        required: true
    }
})

module.exports = model("Occasion", occasion)