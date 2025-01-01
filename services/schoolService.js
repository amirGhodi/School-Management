const School = require('../models/school');

exports.createSchool = async (data) => {
  const school = new School(data);
  await school.save();
  return school;
};

exports.getSchools = async () => {
  const schools = await School.find();
  return schools;
};

exports.getSchoolById = async (id) => {
  const school = await School.findById(id);
  if (!school) throw new Error('School not found');
  return school;
};

exports.updateSchool = async (id, data) => {
  const school = await School.findByIdAndUpdate(id, data, { new: true });
  if (!school) throw new Error('School not found');
  return school;
};

exports.deleteSchool = async (id) => {
  const school = await School.findByIdAndDelete(id);
  if (!school) throw new Error('School not found');
  return school;
};
