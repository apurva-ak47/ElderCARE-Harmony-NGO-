const ContactMessage = require('../models/ContactMessage');

const createContactMessage = async (req, res, next) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and message are required.',
      });
    }

    const created = await ContactMessage.create({ name, email, phone, message });

    return res.status(201).json({
      success: true,
      message: 'Contact message saved successfully.',
      data: created,
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  createContactMessage,
};
