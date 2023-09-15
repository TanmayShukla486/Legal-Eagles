const express = require('express');
const globalErrorHandler = require('./controllers/errorController');
const AppError = require('./utils/appError');
const courseRouter = require('./routes/courseRoute');
const gameRouter = require('./routes/gameRoutes');

const app = express();
app.use(express.json());

// Overview Route
app.route('/').get((req, res) => {
  res.status(200).send('<h1 style="text-align: center;">Overview</h1>');
});

//// Multiple Routes and their Routers
// Router assignment for the route of courses
app.use('/courses', courseRouter);
// Router assignment for the route of games
app.use('/games', gameRouter);

// Handling the faulty routes that the user may enter
app.all('*', (req, res, next) => {
  next(
    new AppError(
      `Can't find the requested url: ${req.originalUrl} on this server`,
      404
    )
  );
});

// Assigning a custom made Error Handler to handle unknown requests
app.use(globalErrorHandler);

module.exports = app;
