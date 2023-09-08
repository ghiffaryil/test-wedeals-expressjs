// userModel.js
const db = require('../db/db');

// Mengambil semua Kamar Hotel
exports.getAllHotelKamar = async () => {
    try {
        const query = 'SELECT * FROM "hotel_kamar"';
        const result = await db.query(query);
        console.log(result); // Logging hasil query
        return result;
    } catch (error) {
        console.error('Terjadi kesalahan dalam model:', error); // Logging pesan kesalahan
        throw error; // Melempar pengecualian
    }
};

exports.getHargaKamar = async (kamar_id) => {
    try {
        const query = 'SELECT harga FROM hotel_kamar WHERE uniqueid = $1';
        const values = [kamar_id];
        const result = await db.query(query, values);

        if (result.rows < 1) {
            throw new Error('Kamar dengan kamar_id tidak ditemukan');
        }

        return result;
    } catch (error) {
        throw error;
    }
};
