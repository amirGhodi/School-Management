const Student = require('../models/student');

exports.createStudent = async (data) => {
  const student = new Student(data);
  await student.save();
  return student;
};

exports.getStudents = async (classroomId) => {
  const students = await Student.find({ classroom: classroomId });
  return students;
};

exports.getStudentById = async (id) => {
  const student = await Student.findById(id);
  if (!student) throw new Error('Student not found');
  return student;
};

exports.updateStudent = async (id, data) => {
  const student = await Student.findByIdAndUpdate(id, data, { new: true });
  if (!student) throw new Error('Student not found');
  return student;
};

exports.deleteStudent = async (id) => {
  const student = await Student.findByIdAndDelete(id);
  if (!student) throw new Error('Student not found');
  return student;
};
