const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rute untuk membaca semua pengguna
router.get('/', userController.getAllUsers);

// Rute untuk membuat pengguna baru
router.post('/', userController.createUser);

// Rute untuk membaca pengguna berdasarkan ID
router.get('/:id', userController.getUserById);

// Rute untuk memperbarui pengguna berdasarkan ID
router.put('/:id', userController.updateUser);

// Rute untuk menghapus pengguna berdasarkan ID
router.delete('/:id', userController.deleteUser);

// Cek saldo
router.get('/check-saldo/:id', userController.checkUserSaldo);

module.exports = router;
