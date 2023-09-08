const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// Rute untuk membaca semua pengguna
router.get('/', bookingController.getAllBooking);

router.get('/total-pendapatan-booking', bookingController.getSumTotalPendapatanBooking);

// Rute untuk membuat Booking
router.post('/create', bookingController.createBooking);

module.exports = router;
