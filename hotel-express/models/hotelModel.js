// userModel.js
const db = require('../db/db');

// Mengambil semua Hotel
exports.getAllHotel = async () => {
    try {
        const query = 'SELECT * FROM "hotel"';
        const result = await db.query(query);
        console.log(result); // Logging hasil query
        return result;
    } catch (error) {
        console.error('Terjadi kesalahan dalam model:', error); // Logging pesan kesalahan
        throw error; // Melempar pengecualian
    }
};
