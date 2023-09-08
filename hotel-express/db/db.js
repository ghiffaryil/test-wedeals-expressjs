const pgp = require('pg-promise')();

// Konfigurasi koneksi database
const dbConfig = {
    host: 'localhost',
    user: 'postgres',
    database: 'db_hotel',
    password: 'postgres',
    port: 5432,
};

// Membuat objek koneksi database
const db = pgp(dbConfig);

module.exports = db;
