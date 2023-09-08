const express = require('express');
const router = express.Router();
const hotelKamarController = require('../controllers/hotelKamarController');

// Rute untuk membaca semua pengguna
router.get('/', hotelKamarController.getAllHotelKamar);

// Rute untuk membuat pengguna baru
router.post('/', hotelKamarController.createHotelKamar);

// Rute untuk membaca pengguna berdasarkan ID
router.get('/:id', hotelKamarController.getHotelKamarById);

// Rute untuk memperbarui pengguna berdasarkan ID
router.put('/:id', hotelKamarController.updateHotelKamar);

// Rute untuk menghapus pengguna berdasarkan ID
router.delete('/:id', hotelKamarController.deleteHotelKamar);

// Cek Harga Kamar
router.get('/:kamar_id/harga', hotelKamarController.getHargaKamar);

module.exports = router;
