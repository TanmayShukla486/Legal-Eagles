const express = require('express');
const GameController = require('./../controllers/gameController');

// Creating a router using the express Router
const router = express.Router();

// Assigning the different route handlers which have been imported from the controller modules
// The handlers are assigned on the basis of the type of request such as get, post, patch, delete
router.route('/').get(GameController.getAllGames).post(GameController.addGame);

// This route handling is done for id specific queries
router
  .route('/:id')
  .get(GameController.getGame)
  .patch(GameController.patchGame)
  .delete(GameController.removeGame);

module.exports = router;
