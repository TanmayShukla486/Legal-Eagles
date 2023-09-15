const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = require('./app');

dotenv.config({ path: './config.env' });

///// Connecting Database
// Extracting the database from the environment variables and replacing the required fields with their values
let DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);
DB = DB.replace('<username>', process.env.DATABASE_USERNAME);

// IIFE to set up the database
(async function () {
  await mongoose.connect(DB);
  console.log('Database connected');
})();

///// Listening to requests
// assigning a port number of 8000(default) or one from the environment variables if exists
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server running on port number: ${port}`);
});
