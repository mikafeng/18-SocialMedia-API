const { Thought, User } = require('../models');

module.exports = {
    getThoughts(req, res) {
        Thought.find()
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err))
    },
    
    getSingleThought(req, res) {
        Thought.findOne({_id: req.params.thoughtId})
        .then((thought) =>
        !thought
        ? res.status(404).json({message: 'No thought found with that id.'})
        : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },

    createThought(req, res){
        Thought.create(req.body)
        .then((thought)=> {
        return User.findOneAndUpdate(
            {_id: req.body.userId},
            {$addToSet: {thoughts: thought._id}},
            {new: true}
        );
        })
        .then((user)=> 
        !user
        ? res.status(404).json({message: 'Thought created, but no user with that id!'})
        : res.json(`Thought created by ${user}`)
        )
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },

    updateThought(req, res){
        Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            {$set: req.body},
            {runValidators: true, new: true}
        )
        .then((thought) =>
        !thought
        ? res.status(404).json('No thought with that id found.')
        : res.json(thought)
        )
        .catch((err) => {
        console.log(err)
        res.status(500).json(err)
        });
    },
    deleteThought(req, res){
        Thought.findOneAndRemove({_id: req.params.thoughtId})
        .then((thought) =>
        !thought 
        ? res.status(404).json({message: 'No thought with that id!'})
        : User.findOneAndUpdate(
            {thoughts: req.params.thoughtId},
            {$pull: {thought: req.params.thoughtId}},
            {new:true}
            )
        )       
        .then((user) =>
        !user
        ? res.status(404).json({message: 'Thought deleted but no user with this id!'})
        : res.json({message: 'Thought succesfully deleted from user!'})
        )
        .catch((err) => res.status(500).json(err))
    },
    addReaction(req, res){
        Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            {$addToSet: {reactions: req.body}},
            {runValidators: true, new: true}
        )
        .then((thought) =>
        !thought
        ? res.status(404).json({message: 'No thought with that id!'})
        : res.json(thought)
        )
        .catch((err)=> res.status(500).json(err));
    },
    removeReaction(req, res){
        Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            {$pull: { reactions: {reactionId: req.params.reactionId}}},
            {runValidators: true, new: true}
        )
        .then((thought)=>
        !thought
        ? res.status(404).json({message: 'No thought with that id!'})
        : res.json({message: 'deleted reaction.'})
        )
        .catch((err) => res.status(500).json(err));
    },
};

