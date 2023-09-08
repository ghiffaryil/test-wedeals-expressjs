// userModel.js
const db = require('../db/db');

// Mengambil semua pengguna
exports.getAllUsers = async () => {
    try {
        const query = 'SELECT * FROM "user"';
        const result = await db.query(query);
        console.log(result); // Logging hasil query
        return result;
    } catch (error) {
        console.error('Terjadi kesalahan dalam model:', error); // Logging pesan kesalahan
        throw error; // Melempar pengecualian
    }
};


exports.checkUserSaldo = async (user_id) => {
    try {
        const query = 'SELECT saldo FROM "user" WHERE uniqueid = $1';
        const values = [user_id];
        const result = await db.query(query, values);
        if (result.rows < 1) {
            throw new Error('Pengguna dengan user_id tidak ditemukan');
        }
        return result;
    } catch (error) {
        throw error;
    }
};


// Mengurangkan saldo pengguna berdasarkan user_id
exports.subtractUserSaldo = async (user_id, amount) => {
    try {
        const query = 'UPDATE "user" SET saldo = saldo - $1 WHERE uniqueid = $2';
        const values = [amount, user_id];
        await db.query(query, values);
    } catch (error) {
        throw error;
    }
};
