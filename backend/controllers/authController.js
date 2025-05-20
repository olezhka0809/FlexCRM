const User = require('../models/User');
const Company = require('../models/Company');
const bcrypt = require('bcryptjs');

exports.registerAdmin = async (req, res) => {
  try {
    const {
      email, password, firstName, lastName, phone, position,
      companyName, companyPhone, country, city, address, postalCode, industry
    } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ error: 'Email deja folosit' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const company = new Company({ name: companyName, phone: companyPhone, country, city, address, postalCode, industry });
    await company.save();

    const user = new User({
      email, password: hashedPassword, userType: 'admin',
      firstName, lastName, phone, position, company: company._id
    });
    await user.save();

    company.admin = user._id;
    await company.save();

    res.status(201).json({ message: 'Administrator înregistrat', userId: user._id, companyId: company._id });
  } catch (error) {
    res.status(500).json({ error: 'Eroare internă' });
  }
};

// similar: exports.registerEmployee și exports.login
