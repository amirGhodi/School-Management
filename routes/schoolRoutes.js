const express = require('express');
const schoolController = require('../controllers/schoolController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const validate = require('../middleware/validateMiddleware');
const { createSchoolSchema, updateSchoolSchema } = require('../validators/schoolValidator');
const router = express.Router();

router.post('/', authMiddleware, roleMiddleware(['superadmin']), validate(createSchoolSchema), schoolController.createSchool);
router.get('/', authMiddleware, roleMiddleware(['superadmin']), schoolController.getSchools);
router.get('/:id', authMiddleware, roleMiddleware(['superadmin', 'schooladmin']), schoolController.getSchoolById);
router.put('/:id', authMiddleware, roleMiddleware(['superadmin']), validate(updateSchoolSchema), schoolController.updateSchool);
router.delete('/:id', authMiddleware, roleMiddleware(['superadmin']), schoolController.deleteSchool);

module.exports = router;
