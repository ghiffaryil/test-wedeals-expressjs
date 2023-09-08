const userModel = require('../models/userModel');

// Mengambil semua pengguna
exports.getAllUsers = async (req, res) => {
    try {
        const result = await userModel.getAllUsers();
        res.status(200).json(result);
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
    }
};


// Membuat pengguna baru
exports.createUser = async (req, res) => {
    // Logika untuk membuat pengguna baru
};

// Mendapatkan pengguna berdasarkan ID
exports.getUserById = async (req, res) => {
    // Logika untuk mendapatkan pengguna berdasarkan ID
};

// Memperbarui pengguna berdasarkan ID
exports.updateUser = async (req, res) => {
    // Logika untuk memperbarui pengguna berdasarkan ID
};

// Menghapus pengguna berdasarkan ID
exports.deleteUser = async (req, res) => {
    // Logika untuk menghapus pengguna berdasarkan ID
};


// Memeriksa saldo pengguna berdasarkan ID
exports.checkUserSaldo = async (req, res) => {
    try {
        const userId = req.params.id; // Mengambil ID pengguna dari URL

        // Memeriksa saldo pengguna berdasarkan ID
        const saldo = await userModel.checkUserSaldo(userId);

        res.status(200).json(saldo);
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
        res.status(500).json({ error: error.message });
    }
};