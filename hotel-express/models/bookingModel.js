// userModel.js
const db = require('../db/db');
const hotelKamarModel = require('./hotelKamarModel');

// Buat Api get booking list, informasi yang ditampilkan dari table booking dengan relasi ke table hotel_kamar dan hotel untuk mendapatkan informasi detail hotel, serta relasi ke table user untuk menampilkan informasi user yang malakukan booking.
exports.getAllBooking = async () => {
  try {
    const query = `
        SELECT
        booking.uniqueid AS booking_id,
        booking.kamar_id,
        booking.harga_kamar,
        booking.pendapatan_bersih,
        booking.pendapatan_sales,
        booking.sales_code,
        booking.tanggal_check_in,
        booking.tanggal_check_out,
        hotel.nama as nama_hotel,
        hotel.alamat,
        hotel_kamar.nama_kamar,
        hotel_kamar.nomor_kamar,
        "user".uniqueid AS user_id,
        "user".nama as nama_user
        FROM booking
        INNER JOIN hotel_kamar ON booking.kamar_id = hotel_kamar.uniqueid
        INNER JOIN "user" ON booking.user_id = "user".uniqueid
        INNER JOIN hotel ON hotel_kamar.hotel_id = hotel.uniqueid;
        `;
    const result = await db.query(query);
    console.log(result); // Log hasil query
    return result;
  } catch (error) {
    console.error('Terjadi kesalahan dalam model:', error); // Log pesan kesalahan
    throw error; // Tampilkan Error
  }
};

// HITUNG TOTAL PENDAPATAN BERSIH DARI TABLE BOOKING
exports.getSumTotalPendapatanBooking = async () => {
  try {
    const query = 'SELECT SUM(pendapatan_bersih) AS total_pendapatan FROM booking';
    const result = await db.query(query);
    return result;
  } catch (error) {
    throw error;
  }
};

// CREATE BOOKING
exports.createBooking = async (user_id, kamar_id, jumlah_hari_menginap) => {

  res.setHeader('Content-Type', 'application/json');

  try {

    const userSaldo = await userModel.checkUserSaldo(user_id);
    const harga_kamar = await hotelKamarModel.getHargaKamar(kamar_id);

    // Memeriksa apakah saldo mencukupi
    if (userSaldo < harga_kamar) {
      throw new Error('Saldo pengguna tidak mencukupi');
    }

    const pendapatan_bersih = harga_kamar * jumlah_hari_menginap;

    await db.beginTransaction();

    // Menjalankan INSERT INTO
    const query = `
      INSERT INTO booking (uniqueid, user_id, kamar_id, harga_kamar, pendapatan_bersih, pendapatan_sales, sales_code, jumlah_hari_menginap, tanggal_check_in, tanggal_check_out)
      VALUES (DEFAULT, $1, $2, $3, $4, 0, 0, $5, current_timestamp, current_timestamp) RETURNING *;
    `;
    const values = [user_id, kamar_id, harga_kamar, pendapatan_bersih, jumlah_hari_menginap];
    const result = await db.query(query, values);

    // Mengurangkan saldo pengguna
    await userModel.subtractUserSaldo(user_id, harga_kamar);

    // Commit transaksi jika berhasil
    await db.commit();

    // return result;

    res.status(201).json(result);

  } catch (error) {
    // throw error;
    await db.rollback();
    console.error('Terjadi kesalahan:', error);
    res.status(500).json({ error: error.message });
  }
}