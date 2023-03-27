const { Schema, model } = require('mongoose');

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
        //need to match valid email address
    },

    thoughts: [
        {
        type: Schema.Types.ObjectId,
        ref: 'thought'
        },
    ],    

    friends: [
        {
        type: Schema.Types.ObjectId,
        ref: 'user'
        },
    ],

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
//getter
.get(function () {
    return this.friends.length;
});
//need to check if .length is correct property...

const User = model('user', userSchema);

module.exports = User;