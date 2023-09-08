const hotelKamarModel = require('../models/hotelKamarModel');

// Mengambil semua Hotel Kamar
exports.getAllHotelKamar = async (req, res) => {
    try {
        const result = await hotelKamarModel.getAllHotelKamar();
        res.status(200).json(result);
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
    }
};

// Get Harga Kamar
exports.getHargaKamar = async (req, res) => {
    try {
        const { kamar_id } = req.params;
        const harga_kamar = await hotelKamarModel.getHargaKamar(kamar_id);
        res.status(200).json(harga_kamar);
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
        res.status(500).json({ error: error.message });
    }
};


// Membuat Hotel Kamar baru
exports.createHotelKamar = async (req, res) => {
    // Logika untuk membuat Hotel Kamar baru
};

// Mendapatkan Hotel Kamar berdasarkan ID
exports.getHotelKamarById = async (req, res) => {
    // Logika untuk mendapatkan Hotel Kamar berdasarkan ID
};

// Memperbarui Hotel Kamar berdasarkan ID
exports.updateHotelKamar = async (req, res) => {
    // Logika untuk memperbarui Hotel Kamar berdasarkan ID
};

// Menghapus Hotel Kamar berdasarkan ID
exports.deleteHotelKamar = async (req, res) => {
    // Logika untuk menghapus Hotel Kamar berdasarkan ID
};
