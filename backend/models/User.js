const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userType: { type: String, enum: ['admin', 'manager', 'agent'], required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: { type: String, required: true },
  position: { type: String, required: true },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
    required: function () {
      return this.userType === 'admin';
    },
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', userSchema);
