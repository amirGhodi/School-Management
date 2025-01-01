const bcrypt = require('bcryptjs');
const User = require('../models/user');
const { generateToken } = require('../utils/tokenManager');

exports.register = async (data) => {
  const { username, password, role } = data;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hashedPassword, role });
  await user.save();
  return user;
};

exports.login = async (data) => {
  const { username, password } = data;
  const user = await User.findOne({ username });
  if (!user) throw new Error('Invalid credentials');
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) throw new Error('Invalid credentials');
  const token = generateToken({ id: user._id, role: user.role });
  return token;
};
