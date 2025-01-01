const Classroom = require('../models/classroom');

exports.createClassroom = async (data) => {
  const classroom = new Classroom(data);
  await classroom.save();
  return classroom;
};

exports.getClassrooms = async (schoolId) => {
  const classrooms = await Classroom.find({ school: schoolId });
  return classrooms;
};

exports.getClassroomById = async (id) => {
  const classroom = await Classroom.findById(id);
  if (!classroom) throw new Error('Classroom not found');
  return classroom;
};

exports.updateClassroom = async (id, data) => {
  const classroom = await Classroom.findByIdAndUpdate(id, data, { new: true });
  if (!classroom) throw new Error('Classroom not found');
  return classroom;
};

exports.deleteClassroom = async (id) => {
  const classroom = await Classroom.findByIdAndDelete(id);
  if (!classroom) throw new Error('Classroom not found');
  return classroom;
};
