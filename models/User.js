const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought');

const userSchema = new Schema(
    {
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
        thoughts: [thoughtSchema],
        // friends: [friendSchema],
    },
    {
    toJSON: {
        virtuals: true
    },
    id: false,
    }
);


//virtual property 'friendCount' that gets amount of user's friends
userSchema.virtual('friendCount')
.get(function () {
    return this.friends.length;
});

const User = model('user', userSchema);

module.exports = User;