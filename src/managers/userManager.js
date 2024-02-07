const User = require('../models/User');

// TIODO: Check if user exists

exports.register = (userData) => User.create(userData);

