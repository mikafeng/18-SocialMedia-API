const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
} = require ('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser);


// add friend
router.route(':/userId/friends')
    .post(addFriend);

// delete friend
router.route(':/userId/friends/:friendsId')
    .delete(removeFriend);


module.exports = router;