const mongoose = require('mongoose');

// Creating a schema for the course model which will help us store the courses in the database
const courseSchema = mongoose.Schema({
  image: {
    type: String,
    required: [true, 'A course must have an image'],
  },
  overview: {
    type: String,
    required: [true, 'A course must have an overview'],
  },
  content: {
    type: JSON,
  },
  title: {
    type: String,
    required: [true, 'A course must have a title'],
  },
  rating: {
    type: Number,
  },
  type: {
    type: String,
  },
  age: {
    type: String,
    required: [true, 'A game must have an age category'],
  },
});

// Creating the model for the database
const Course = mongoose.model('Course', courseSchema);
module.exports = Course;
