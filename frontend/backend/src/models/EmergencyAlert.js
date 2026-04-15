const mongoose = require('mongoose');
const { EMERGENCY_STATUS, EMERGENCY_STATUS_VALUES } = require('../constants/emergencyStatus');

const emergencyAlertSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    contactNumber: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    incident: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: EMERGENCY_STATUS_VALUES,
      default: EMERGENCY_STATUS.PENDING,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    statusHistory: [
      {
        fromStatus: {
          type: String,
        },
        toStatus: {
          type: String,
          enum: EMERGENCY_STATUS_VALUES,
          required: true,
        },
        changedBy: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
          required: true,
        },
        note: {
          type: String,
          trim: true,
          maxlength: 250,
        },
        changedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

emergencyAlertSchema.index({ createdBy: 1, createdAt: -1 });
emergencyAlertSchema.index({ status: 1, createdAt: -1 });

module.exports = mongoose.model('EmergencyAlert', emergencyAlertSchema);
