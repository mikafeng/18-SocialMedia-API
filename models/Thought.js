const { Schema, model} = require('mongoose');

//Schema to create thought model
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        username:{
            type: String,
            required: true,
        },
        reactions:
    }
)