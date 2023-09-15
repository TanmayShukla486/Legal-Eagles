const mongoose = require('mongoose');

// Creating the schema for the games that are to be stored in the database
const gameSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A game must have a name'],
  },
  desc: {
    type: String,
    required: [true, 'A game must have a description'],
  },
  image: {
    type: String,
    required: [true, 'A game must have an image'],
  },
  content: {
    type: JSON,
  },
  platform: {
    type: String,
    required: [true, 'A game must have a platform'],
  },
});

// Creating a model for the game in the database using the above schema
const Game = mongoose.model('Game', gameSchema);
module.exports = Game;
