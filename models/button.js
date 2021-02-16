const mongoose = require('mongoose');

const buttonSchema = new mongoose.Schema({
  state: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model('button', buttonSchema);
