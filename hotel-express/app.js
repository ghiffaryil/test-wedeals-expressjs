const express = require('express');
const app = express();
const port = 3000;

// Impor rute-rute untuk setiap entitas
const userRoutes = require('./routes/userRoutes');
const hotelRoutes = require('./routes/hotelRoutes');
const hotelKamarRoutes = require('./routes/hotelKamarRoutes');
const bookingRoutes = require('./routes/bookingRoutes');



// Gunakan rute-rute
app.use('/api/user', userRoutes);
app.use('/api/hotel', hotelRoutes);
app.use('/api/hotel-kamar', hotelKamarRoutes);
app.use('/api/booking', bookingRoutes);

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
