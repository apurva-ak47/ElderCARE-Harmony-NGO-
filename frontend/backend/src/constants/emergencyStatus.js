const EMERGENCY_STATUS = {
  PENDING: 'pending',
  IN_PROGRESS: 'in-progress',
  RESOLVED: 'resolved',
};

const EMERGENCY_STATUS_VALUES = Object.values(EMERGENCY_STATUS);

const EMERGENCY_STATUS_TRANSITIONS = {
  [EMERGENCY_STATUS.PENDING]: [EMERGENCY_STATUS.IN_PROGRESS],
  [EMERGENCY_STATUS.IN_PROGRESS]: [EMERGENCY_STATUS.RESOLVED],
  [EMERGENCY_STATUS.RESOLVED]: [],
};

const canTransitionStatus = (currentStatus, nextStatus) => {
  const allowedNextStatuses = EMERGENCY_STATUS_TRANSITIONS[currentStatus] || [];
  return allowedNextStatuses.includes(nextStatus);
};

module.exports = {
  EMERGENCY_STATUS,
  EMERGENCY_STATUS_VALUES,
  EMERGENCY_STATUS_TRANSITIONS,
  canTransitionStatus,
};
