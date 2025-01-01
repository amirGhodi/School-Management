const classroomService = require('../services/classroomService');

exports.createClassroom = async (req, res) => {
  try {
    const classroom = await classroomService.createClassroom(req.body);
    res.status(201).json(classroom);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getClassrooms = async (req, res) => {
  try {
    const classrooms = await classroomService.getClassrooms(req.params.schoolId);
    res.json(classrooms);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getClassroomById = async (req, res) => {
  try {
    const classroom = await classroomService.getClassroomById(req.params.id);
    res.json(classroom);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

exports.updateClassroom = async (req, res) => {
  try {
    const classroom = await classroomService.updateClassroom(req.params.id, req.body);
    res.json(classroom);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

exports.deleteClassroom = async (req, res) => {
  try {
    await classroomService.deleteClassroom(req.params.id);
    res.status(204).send("Classroom deleted Successfully");
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
