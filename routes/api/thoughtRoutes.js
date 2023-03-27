const router = require('express').Router();

const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addThoughtReaction,
    removeThoughtReaction,
} = require('../../controllers/thoughtController');

// api/thoughts
router.route('/').get(getThoughts).post(createThought);

router.route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);

// api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions')
    .post(addThoughtReaction);

// //remove reaction
router.route('/:thoughtId/reactions/:reactionId')
    .delete(removeThoughtReaction);

module.exports =router;