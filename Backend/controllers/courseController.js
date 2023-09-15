const Course = require('./../models/courseModel');
const catchAsync = require('./../utils/ErrorAPI');
const courseAPI = require('./../utils/courseAPI');

// Function to respond to the query requesting the courses on the basis of specific parameters
exports.getAllCourses = catchAsync(async (req, res, next) => {
  const features = new courseAPI(Course.find(), req.query)
    .filter()
    .sort()
    .fields()
    .paginate();
  const query = await features.query;
  res.status(200).json({
    status: 'success',
    results: query.length,
    data: query,
  });
});

// Function to respond to the query requesting a specific course pertaining to an id
exports.getCourse = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const course = await Course.findById(id);
  res.status(200).json({
    status: 'success',
    data: course,
  });
});

// Function to add a new course to the database
exports.addCourse = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const course = await Course.create(req.body);
  res.status(201).json({
    status: 'success',
    course,
  });
});

// Function to edit a pre-existing course in the database
exports.patchCourse = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const course = await Course.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(204).json({
    status: 'success',
    course,
  });
});

// Function to remove a course existing in the database
exports.removeCourse = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const course = await Course.findByIdAndDelete(id);
  res.status(206).json({
    status: 'success',
    course,
  });
});
