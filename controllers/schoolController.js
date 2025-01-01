const schoolService = require('../services/schoolService');

exports.createSchool = async (req, res) => {
  try {
    const school = await schoolService.createSchool(req.body);
    res.status(201).json(school);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getSchools = async (req, res) => {
  try {
    const schools = await schoolService.getSchools();
    res.json(schools);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getSchoolById = async (req, res) => {
  try {
    const school = await schoolService.getSchoolById(req.params.id);
    res.json(school);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

exports.updateSchool = async (req, res) => {
  try {
    const school = await schoolService.updateSchool(req.params.id, req.body);
    res.json(school);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

exports.deleteSchool = async (req, res) => {
  try {
    await schoolService.deleteSchool(req.params.id);
    res.status(204).send("School deleted Successfully");
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
