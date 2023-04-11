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
        unique: true,
    },

    thoughts: [
        {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
        },
    ],    

    friends: [
        {
        type: Schema.Types.ObjectId,
        ref: 'User'
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
// userSchema.virtual('getFriends')
// //getter
// .get(function () {
//     return `${this.friends.length}`;
// });


const User = model('user', userSchema);

module.exports = User;