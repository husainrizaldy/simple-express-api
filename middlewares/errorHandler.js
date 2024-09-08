const { validationResult } = require('express-validator');
const response = require('../utils/response');

const errorHandler = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return response(400, errors.array(), 'Terjadi kesalahan validasi', res);
    }
    next();
};

module.exports = errorHandler;