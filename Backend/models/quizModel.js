const mongoose = require('mongoose');

// Creating a schema for the quizzes to be stored in the database
const quizSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, 'A quiz must have a title'],
  },
  question_bank: {
    type: Array,
    required: [true, 'A quiz must have a question bank'],
  },
  answer_bank: {
    type: Array,
    required: [true, 'A quiz must have an answer bank'],
  },
  correct_answers: {
    type: Array,
    required: [true, 'A quiz must have a set of correct answers'],
  },
  hints: {
    type: Array,
    required: [true, 'A quiz must have a set of hints'],
  },
});

// Creating a quiz model from the schema created above for the database
const Quiz = mongoose.model('Quiz', quizSchema);
module.exports = Quiz;
