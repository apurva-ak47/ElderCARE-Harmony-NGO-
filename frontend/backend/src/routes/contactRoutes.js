const express = require('express');
const { createContactMessage } = require('../controllers/contactController');
const validate = require('../middleware/validate');
const { contactSchema } = require('../validators/contactValidator');

const router = express.Router();

router.post('/', validate(contactSchema), createContactMessage);

module.exports = router;
