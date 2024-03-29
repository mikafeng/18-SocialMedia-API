const { Schema, model, Types} = require('mongoose');
const Reaction = require('./Reaction');
const moment = require("moment");

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            get: (createdAtVal) =>
                moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a")
            //need getter method to format timestamp on query
        },
       userId: {
            type:String
       },

        reactions: [Reaction]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },

        id: false,
    }
);



thoughtSchema
.virtual('getReactions')
.get(function() {
    return this.reactions.length;
});


const Thought = model('Thought', thoughtSchema);

module.exports = Thought;