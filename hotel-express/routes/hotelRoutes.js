const express = require('express');
const router = express.Router();
const hotelController = require('../controllers/hotelController');

// Rute untuk membaca semua pengguna
router.get('/', hotelController.getAllHotel);

// Rute untuk membuat pengguna baru
router.post('/', hotelController.createHotel);

// Rute untuk membaca pengguna berdasarkan ID
router.get('/:id', hotelController.getHotelById);

// Rute untuk memperbarui pengguna berdasarkan ID
router.put('/:id', hotelController.updateHotel);

// Rute untuk menghapus pengguna berdasarkan ID
router.delete('/:id', hotelController.deleteHotel);

module.exports = router;
