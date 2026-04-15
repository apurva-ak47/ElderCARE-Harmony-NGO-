const EmergencyAlert = require('../models/EmergencyAlert');
const {
  EMERGENCY_STATUS,
  canTransitionStatus,
} = require('../constants/emergencyStatus');

const createEmergencyAlert = async (req, res, next) => {
  try {
    const { name, contactNumber, address, incident } = req.body;

    if (!name || !contactNumber || !address || !incident) {
      return res.status(400).json({
        success: false,
        message: 'Name, contact number, address, and incident are required.',
      });
    }

    const alert = await EmergencyAlert.create({
      name,
      contactNumber,
      address,
      incident,
      status: EMERGENCY_STATUS.PENDING,
      createdBy: req.user._id,
      statusHistory: [
        {
          fromStatus: null,
          toStatus: EMERGENCY_STATUS.PENDING,
          changedBy: req.user._id,
          note: 'Emergency alert created.',
        },
      ],
    });

    return res.status(201).json({
      success: true,
      message: 'Emergency alert created successfully.',
      data: alert,
    });
  } catch (error) {
    return next(error);
  }
};

const getEmergencyAlerts = async (req, res, next) => {
  try {
    const alerts = await EmergencyAlert.find()
      .populate('createdBy', 'name email')
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: alerts.length,
      data: alerts,
    });
  } catch (error) {
    return next(error);
  }
};

const updateEmergencyStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status, note } = req.body;

    const alert = await EmergencyAlert.findById(id);
    if (!alert) {
      return res.status(404).json({
        success: false,
        message: 'Emergency alert not found.',
      });
    }

    const currentStatus = alert.status;

    if (currentStatus === status) {
      return res.status(400).json({
        success: false,
        message: `Alert is already in '${status}' status.`,
      });
    }

    if (!canTransitionStatus(currentStatus, status)) {
      return res.status(400).json({
        success: false,
        message: `Invalid transition from '${currentStatus}' to '${status}'.`,
      });
    }

    alert.statusHistory.push({
      fromStatus: currentStatus,
      toStatus: status,
      changedBy: req.user._id,
      note,
    });

    alert.status = status;
    await alert.save();

    const updated = await EmergencyAlert.findById(alert._id)
      .populate('createdBy', 'name email')
      .populate('statusHistory.changedBy', 'name email');

    return res.status(200).json({
      success: true,
      message: 'Emergency status updated successfully.',
      data: updated,
    });
  } catch (error) {
    return next(error);
  }
};

const getEmergencyTimeline = async (req, res, next) => {
  try {
    const { id } = req.params;

    const alert = await EmergencyAlert.findById(id)
      .select('status statusHistory createdAt updatedAt')
      .populate('statusHistory.changedBy', 'name email');

    if (!alert) {
      return res.status(404).json({
        success: false,
        message: 'Emergency alert not found.',
      });
    }

    return res.status(200).json({
      success: true,
      data: {
        status: alert.status,
        timeline: alert.statusHistory,
        createdAt: alert.createdAt,
        updatedAt: alert.updatedAt,
      },
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  createEmergencyAlert,
  getEmergencyAlerts,
  updateEmergencyStatus,
  getEmergencyTimeline,
};
