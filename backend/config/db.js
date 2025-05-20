const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/crm_system', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conectat la MongoDB');
  } catch (err) {
    console.error('Eroare la conectarea cu MongoDB:', err);
    process.exit(1);
  }
};

module.exports = connectDB;
