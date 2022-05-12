const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        task: {
            type: String,
            require: true,
        },
    },
    { timestamps: true }
)
module.exports = mongoose.model("Task", TaskSchema)
