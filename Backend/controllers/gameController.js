const Game = require('./../models/gameModel');
const API = require('./../utils/gameAPI');
const catchAsync = require('./../utils/ErrorAPI');

// Function to get all the games in the database on the basis of parameters passed as arguments
exports.getAllGames = catchAsync(async (req, res, next) => {
  const features = new API(Game.find(), req.query)
    .filter()
    .sort()
    .paginate()
    .fields();
  const query = await features.query;
  res.status(200).json({
    status: 'success',
    results: query.length,
    games: query,
  });
});

// Function to get a specific game pertaining to an id
exports.getGame = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const game = await Game.findById(id);
  res.status(200).json({
    status: 'success',
    game,
  });
});

// Function to add a new game to the database
exports.addGame = catchAsync(async (req, res, next) => {
  const game = await Game.create(req.body);
  res.status(201).json({
    status: 'success',
    game,
  });
});

// Function to remove a pre-existing game from the database
exports.removeGame = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const game = await Game.findByIdAndDelete(id);
  res.status(206).json({
    status: 'success',
    game,
  });
});

// Function to edit a pre-existing game in the database
exports.patchGame = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const game = await Game.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });
});
