const User = require('../models/User');

module.exports = {

    getUsers(req, res){
        User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));
    },

    getSingleUser(req, res){
        User.findOne({_id: req.params.userId})
        .select('-__v')
        .then((user) =>
        !user
        ? res.status(404).json({message: 'No user with that id'})
        : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },

    createUser(req, res) {
        User.create(req.body)
        .then((dbUserData) => res.json(dbUserData))
        .catch((err) => res.status(500).json(err));
},
    updateUser(req, res) {
        User.findOneAndUpdate(req.body)
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err))    
    },


    deleteUser(req, res) {
    //     User.findOneAndRemove({_id: req.params.userId})
    //     .then((user) => 
    //     !user
    //     ? res.status(404).json({message: 'No user with that id.'})
    //     : 
    //     )
    //     .then((thoughts) =>
    //     !thoughts
    //     ?
    //     :
    //     )
    //     .catch((err) => res.status(500).json(err));
        
    },

    // Add friend to user
    addFriend(req, res) {
        console.log('You are adding a friend!');
        console.log(req.body);
        User.findOneAndUpdate(
            {_id: req.params.userId},
            {$addToSet: {friends: req.body}},
            {runValidators: true, new: true}
        )
        .then((user) =>
        !user
            ? res.status(404).json({message: 'No user with that ID.'})
            :res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },

    removeFriend(req, res) {},
};