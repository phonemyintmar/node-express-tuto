const { Schema, model } = require("mongoose");

const TaskSchema = new Schema({
    // _id: String,
    name: {
        type: String,
        required: [true, "Must provide a name"],
        trim: true,
        maxlength: [20, "A shay kyee htae loh m ya!!"]
    },
    completed: {
        type: Boolean,
        default: false,
    },
    // createdTime:
})



module.exports = model('Task', TaskSchema)