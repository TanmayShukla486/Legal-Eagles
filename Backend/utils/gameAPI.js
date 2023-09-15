const Game = require('./../models/gameModel');

// An API to handle the game requests made that contain specific parameters such as sort and others
class APIFeatures {
  constructor(query, queryObj) {
    this.query = query;
    this.queryObj = queryObj;
  }
  // Function to filter out the parameters such as greater than(gt) etc while also not removing the other key parameters
  // such as sort, filter, page, limit for further operations
  filter() {
    let queryStr = { ...this.queryObj };
    const excludedItems = ['sort', 'page', 'limit', 'fields'];
    excludedItems.forEach((el) => delete queryStr[el]);
    queryStr = JSON.stringify(queryStr);
    queryStr = queryStr.replace(/\bgte|lte|gt|lt\b/g, (match) => `$${match}`);
    this.query = Game.find(JSON.parse(queryStr));
    return this;
  }
  // Function to sort the values of the database while displaying them according to the parameters passed
  sort() {
    if (this.queryObj.sort) {
      const sort = this.queryObj.sort.split(',', ' ');
      this.query = this.query.sort(sort);
    }
    return this;
  }
  // Function to limit the amount of results that are displayed on the current page
  // This function returns only the required amount of results instead of the whole list of values in the database
  paginate() {
    if (this.queryObj.limit || this.queryObj.page) {
      const page = this.queryObj.page * 1 - 1 || 0;
      const limit = this.queryObj.limit * 1 || 10;
      this.query = this.query.skip(page * limit).limit(limit);
    }
    return this;
  }
  // Function to filter out the content from the database based on the fields that are passed in the parameters
  // This function checks for the presence or absence of the fields (as per requirement) and returns the results
  fields() {
    if (this.queryObj.fields) {
      const fields = this.queryObj.fields.split(',', ' ');
      this.query = this.query.fields(fields);
    }
    return this;
  }
}

module.exports = APIFeatures;
