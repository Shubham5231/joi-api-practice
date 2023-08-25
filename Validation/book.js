const joi = require('joi');

const BookValidations = {
  createOrUpdateBookValidator: {
    body: joi.object({
      name: joi.string().required(),
      author: joi.string().required(),
      summary: joi.string().required(),
      numberOfPages: joi.number().required(),
    }),
  },
};

module.exports = BookValidations;
