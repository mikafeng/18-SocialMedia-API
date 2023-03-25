const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique:,
            required: true,
            trimmed :
        },
        email: {
            type: String,
            required: true,
            unique:,

        },
        thoughts: [thoughtSchema],
        friends: [friendSchema]
        },
        {
    }
);

const User = model('user', userSchema);

module.exports = User;