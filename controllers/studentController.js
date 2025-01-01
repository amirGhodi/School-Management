const studentService = require('../services/studentService');

exports.createStudent = async (req, res) => {
  try {
    const student = await studentService.createStudent(req.body);
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getStudents = async (req, res) => {
  try {
    const students = await studentService.getStudents(req.params.classroomId);
    res.json(students);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getStudentById = async (req, res) => {
  try {
    const student = await studentService.getStudentById(req.params.id);
    res.json(student);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

exports.updateStudent = async (req, res) => {
  try {
    const student = await studentService.updateStudent(req.params.id, req.body);
    res.json(student);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    await studentService.deleteStudent(req.params.id);
    res.status(204).send("Student deleted Successfully");
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
