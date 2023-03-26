const { connect, connection } = require(mongoose);


connect('mongodb://127.0.0.1:27017/socialmedia_db', {
    userNewUrlParser: true,
    useUnifiedTopology: true,
})

module.exports = connection;

