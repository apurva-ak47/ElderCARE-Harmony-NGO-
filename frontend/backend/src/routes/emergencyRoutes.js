const express = require('express');
const {
  createEmergencyAlert,
  getEmergencyAlerts,
  updateEmergencyStatus,
  getEmergencyTimeline,
} = require('../controllers/emergencyController');
const { protect } = require('../middleware/authMiddleware');
const validate = require('../middleware/validate');
const {
  mongoIdSchema,
  createEmergencySchema,
  updateEmergencyStatusSchema,
} = require('../validators/emergencyValidator');

const router = express.Router();

router.get('/', protect, getEmergencyAlerts);
router.post('/', protect, validate(createEmergencySchema), createEmergencyAlert);
router.get('/:id/timeline', protect, validate(mongoIdSchema, 'params'), getEmergencyTimeline);
router.patch(
  '/:id',
  protect,
  validate(mongoIdSchema, 'params'),
  validate(updateEmergencyStatusSchema),
  updateEmergencyStatus
);

module.exports = router;
