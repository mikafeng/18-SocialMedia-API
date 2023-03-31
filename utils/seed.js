const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomName, getRandomThoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');
    await Thought.deleteMany({});
    await User.deleteMany({});

    const users = [];
    const thoughts = getRandomThoughts(10);

    for (let i = 0; i < 20; i++) {
        const username = getRandomName();
        const email = `${username}@bootcamp.com`;

        users.push({ 
            username,
            email,
            friends: Math.floor(Math.random() * (30 - 18 + 1) + 18)
        });
    }

    await User.collection.insertMany(users);
    await Thought.collection.insertMany(thoughts);

    console.table(users);
    console.table(thoughts);
    console.info('Seeding complete! 🌱');
    process.exit(0);
});