const { Thought, User } = require('../models');

module.exports = {
    getThoughts() {
        Thought.find()
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err));
    },
    getSingleThought() {},
    createThought(){},
    updateThought(){},
    deleteThought(){},
}

