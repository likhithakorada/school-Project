

const mongoose = require('../Config/mongoose');

const SchoolSchema = new mongoose.Schema({
  schoolName: {
    type: String,
    required: true,
  },
  schoolFees: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  contactInfo: {
    type: String,
    required: true,
  },
  // Define other fields here
});

module.exports = mongoose.model('School', SchoolSchema);
