const router = require('express').Router();

const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction,
} = require('../../controllers/thoughtController');

// api/thoughts
router.route('/').get(getThoughts).post(createThought);

router.route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);

// api/thoughts/:thoughtId/reactions
// router.route('/:thouhtId/reactions')
//     .post(addReaction);

// //remove reaction
// router.route('/:thoughtId/reactions/:reactionId')
//     .delete(removeReaction);

module.exports =router;