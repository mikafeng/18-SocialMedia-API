const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const cwd = process.cwd()

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(routes);

// After you create your Heroku application, visit https://dashboard.heroku.com/apps/ select the application name and add your Atlas connection string as a Config Var
// Node will look for this environment variable and if it exists, it will use it. Otherwise, it will assume that you are running this application locally

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}.`);
    });
});


