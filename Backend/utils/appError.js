// Custom made error class to handle errors that are specific to our conditions
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);

    this.statusCode = statusCode;
    // if the statusCode starts with a '4' it is classified as a 'fail' otherwise 'error'
    this.status = statusCode / 100 == 4 ? 'fail' : 'error';
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
