# SocialMedia-API
A backend API using NoSQL for a social media startup.
Users can share their thoughts, react to friends' thoughts and create a friend list.

## Usage

This application uses Express.js to route User and Thought Models.
The database used is MongoDB and Mongoose ODM. User has references to Friends and Thoughts while Thoughts has a subschema of comments/reactions.

## Installation

git clone the repository code to your local environment. <br/>
`npm i` to install dependencies <br/>
`npm run seed` to seed data (data can easily be changed in utils folder) <br/>
`npm start` to start application. <br/>

Test routes using an API platform such as Postman or Insomnia. <br/>
Use backend for your future applications.

## Dependencies
- Express.js for routing
- MongoDB database
- Mongoose ODM
- JavaScript date library (JS Date object fine too)

# License 
MIT
