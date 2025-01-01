const express = require('express');
const classroomController = require('../controllers/classroomController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const validate = require('../middleware/validateMiddleware');
const { createClassroomSchema, updateClassroomSchema } = require('../validators/classroomValidator');
const router = express.Router();

router.post('/', authMiddleware, roleMiddleware(['schooladmin']), validate(createClassroomSchema), classroomController.createClassroom);
router.get('/:schoolId/class', authMiddleware, roleMiddleware(['schooladmin']), classroomController.getClassrooms);
router.get('/:id', authMiddleware, roleMiddleware(['schooladmin']), classroomController.getClassroomById);
router.put('/:id', authMiddleware, roleMiddleware(['schooladmin']), validate(updateClassroomSchema), classroomController.updateClassroom);
router.delete('/:id', authMiddleware, roleMiddleware(['schooladmin']), classroomController.deleteClassroom);

module.exports = router;
