const express = require('express');
const CourseController = require('./../controllers/courseController');

// Creating a router using the express Router
const router = express.Router();

// Assigning the different route handlers which have been imported from the controller modules
// The handlers are assigned on the basis of the type of request such as get, post, patch, delete
router
  .route('/')
  .get(CourseController.getAllCourses)
  .post(CourseController.addCourse);

// This route handling is done for id specific queries
router
  .route('/:id')
  .get(CourseController.getCourse)
  .patch(CourseController.patchCourse)
  .delete(CourseController.removeCourse);

module.exports = router;
