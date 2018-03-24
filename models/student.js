const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
  "name": {
    type: String,
    required: true
  },
  "email": {
    type: String,
    required: true
  },
  "reg": {
    type: String,
    required: true
  },
  "age": {
    type: Number,
    required: true
  },
  "gender": {
    type: String,
    required: true
  },
  "10%": {
    type: String,
    required: true
  },
  "12%": {
    type: String,
    required: true
  },
  "12Phy": {
    type: String,
    required: true
  },
  "12Chem": {
    type: String,
    required: true
  },
  "12Math": {
    type: String,
    required: true
  },
  "TTPhy1": {
    type: String,
    required: true
  },
  "TTChem1": {
    type: String,
    required: true
  },
  "TTMath1": {
    type: String,
    required: true
  },
  "Phy1": {
    type: String,
    required: true
  },
  "Chem1": {
    type: String,
    required: true
  },
  "Math1": {
    type: String,
    required: true
  },
  "SEM1": {
    type: String,
    required: true
  },
  "TTPhy2": {
    type: String,
    required: true
  },
  "TTChem2": {
    type: String,
    required: true
  },
  "TTMath2": {
    type: String,
    required: true
  },
  "coaching": {
    type: String,
    required: true
  },
  "travel": {
    type: String,
    required: true
  },
  "attendance": {
    type: String,
    required: true
  },
  "health": {
    type: String,
    required: true
  }
});

// export model
const Student = module.exports = mongoose.model('Student', studentSchema, 'testing');
