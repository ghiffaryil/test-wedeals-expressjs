const hotelModel = require('../models/hotelModel');

// Mengambil semua Hotel
exports.getAllHotel = async (req, res) => {
    try {
        const result = await hotelModel.getAllHotel();
        res.status(200).json(result);
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
    }
};


// Membuat Hotel baru
exports.createHotel = async (req, res) => {
    // Logika untuk membuat Hotel baru
};

// Mendapatkan Hotel berdasarkan ID
exports.getHotelById = async (req, res) => {
    // Logika untuk mendapatkan Hotel berdasarkan ID
};

// Memperbarui Hotel berdasarkan ID
exports.updateHotel = async (req, res) => {
    // Logika untuk memperbarui Hotel berdasarkan ID
};

// Menghapus Hotel berdasarkan ID
exports.deleteHotel = async (req, res) => {
    // Logika untuk menghapus Hotel berdasarkan ID
};
