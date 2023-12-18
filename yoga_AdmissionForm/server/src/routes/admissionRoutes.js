const express = require('express');
const router = express.Router();
const admissionController = require('../controllers/admissionController');
const paymentController = require('../controllers/paymentController');


router.post('/', admissionController.submitAdmission);
router.post('/process-payment', paymentController.processPayment);

module.exports = router;
