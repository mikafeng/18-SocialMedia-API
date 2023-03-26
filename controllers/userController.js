const User = require('../models/User');

module.exports = {

    getUsers(req, res){
        User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));
    },

    getSingleUser(req, res){
        User.findOne({_id: req.params.userId})
        .select()
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
        User.findOneAndUpdate },


    deleteUser(req, res) {
        User.findOneAndRemove({_id: req.params.userId})
        .then((user) => 
        !user
        ? res.status(404).json({message: 'No user with that id.'})
        : 
        )
        .then((thoughts) =>
        !thoughts
        ?
        :
        )
        .catch((err) => res.status(500).json(err));
        
    },
};