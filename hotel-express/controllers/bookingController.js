const bookingModel = require('../models/bookingModel');

// Mengambil semua Booking
exports.getAllBooking = async (req, res) => {
    try {
        const result = await bookingModel.getAllBooking();
        res.status(200).json(result);
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
    }
};

// Mengambil Total Pendapatan Bersih
exports.getSumTotalPendapatanBooking = async (req, res) => {
    try {
        const totalPendapatan = await bookingModel.getSumTotalPendapatanBooking();
        res.status(200).json(totalPendapatan);
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
        res.status(500).json({ error: error.message });
    }
};


// Membuat Booking baru
exports.createBooking = async (req, res) => {

    // Logika untuk membuat Booking baru
    try {
        console.log(req);

        const { user_id, kamar_id, jumlah_hari_menginap } = req.body;
        const booking = await bookingModel.createBooking(user_id, kamar_id, jumlah_hari_menginap);
        res.status(201).json(booking);
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
        res.status(500).json({ error: error.message });
    }
};


// Memperbarui Booking berdasarkan ID
exports.updateBooking = async (req, res) => {
    // Logika untuk memperbarui Booking berdasarkan ID
};

// Menghapus Booking berdasarkan ID
exports.deleteBooking = async (req, res) => {
    // Logika untuk menghapus Booking berdasarkan ID
};
