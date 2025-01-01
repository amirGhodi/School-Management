const express = require('express');
const studentController = require('../controllers/studentController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const validate = require('../middleware/validateMiddleware');
const { createStudentSchema, updateStudentSchema } = require('../validators/studentValidator');
const router = express.Router();

router.post('/', authMiddleware, roleMiddleware(['schooladmin']), validate(createStudentSchema), studentController.createStudent);
router.get('/:classroomId/studentDetails', authMiddleware, roleMiddleware(['schooladmin']), studentController.getStudents);
router.get('/:id', authMiddleware, roleMiddleware(['schooladmin']), studentController.getStudentById);
router.put('/:id', authMiddleware, roleMiddleware(['schooladmin']), validate(updateStudentSchema), studentController.updateStudent);
router.delete('/:id', authMiddleware, roleMiddleware(['schooladmin']), studentController.deleteStudent);

module.exports = router;
