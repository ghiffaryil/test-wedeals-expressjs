/*CREATE TABLE HOTEL*/
create table hotel(
UniqueID varchar(10) not null,
nama varchar(100) not null,
alamat text,
no_hp varchar(13) not null,
PRIMARY KEY(UniqueID)
);

/*CREATE TABLE USER*/
CREATE TABLE "user" (
    UniqueID varchar(10) not null,
    nama varchar(100) not null,
    no_hp varchar(13) not null,
    alamat text,
    sales_code int,
    saldo bigint,
    PRIMARY KEY (UniqueID)
);

/*CREATE TABLE HOTEL KAMAR*/
CREATE TABLE "hotel_kamar" (
    UniqueID varchar(10) not null,
    hotel_id varchar(100) not null,
	nama_kamar varchar(100) not null,
    nomor_kamar varchar(10) not null,
    harga int,
    deskripsi text,
    PRIMARY KEY (UniqueID)
);



/*CREATE TABLE BOOKING*/
CREATE TABLE "booking" (
    UniqueID varchar(10) not null,
    kamar_id varchar(100) not null,
	harga_kamar int not null,
    pendapatan_bersih int,
	pendapatan_sales int,
	sales_code varchar(100),
    tanggal_check_in timestamp,
    tanggal_check_out timestamp,
    PRIMARY KEY (UniqueID)
);


-- INSERT HOTEL
INSERT INTO hotel(uniqueid, nama, alamat, no_hp)
values('H0001', 'Ibis Hotel', 'Jl. Siliwangi', '081292191'),
	('H0002', 'Aston Hotel', 'Jl. Bogor', '0813411512'),
	('H0003', 'Amaris Hotel', 'Jl. Baranangsiang', '0899801293');
	
-- INSERT HOTEL KAMAR
INSERT INTO hotel_kamar(uniqueid, hotel_id, nama_kamar, nomor_kamar, harga)
values('HK0009','H0003', 'Amaris-A', '1', 400000),
	('HK0010', 'H0003', 'Amaris-B', '2', 600000),
	('HK0011', 'H0003', 'Amaris-C', '3', 800000),
	('HK0012', 'H0003', 'Amaris-D', '4', 1000000);


-- INSERT BOOKING
INSERT INTO booking(uniqueid, kamar_id, harga_kamar, pendapatan_bersih, pendapatan_sales, sales_code, user_id)
values('BK0002','HK0008', 500000, 500000, 0, '', 'U0002');

-- ALTER TABLE
ALTER TABLE products ADD PRIMARY KEY(id)
ALTER TABLE IF EXISTS public.booking ADD COLUMN user_id character varying(100) NOT NULL;
ALTER TABLE booking
ALTER COLUMN tanggal_check_in SET DEFAULT current_timestamp,
ALTER COLUMN tanggal_check_out SET DEFAULT current_timestamp;

-- UPDATE
UPDATE hotel SET nama = 'Pajajaran Suites' WHERE uniqueid='H0002'
UPDATE booking SET pendapatan_bersih=800000, pendapatan_sales=200000, sales_code='S0001' WHERE uniqueid='BK0001'

-- DELETE
DELETE FROM products WHERE id='P001'

-- SELECT
SELECT * FROM "user"
SELECT * FROM hotel
SELECT
    booking.uniqueid AS booking_id,
    booking.kamar_id,
	booking.harga_kamar,
    hotel_kamar.nama_kamar,
    hotel_kamar.nomor_kamar,
	hotel.uniqueid as hotel_id,
    hotel.nama as nama_hotel,
    hotel.alamat,
	
    booking.pendapatan_bersih,
    booking.pendapatan_sales,
    booking.sales_code,
    booking.tanggal_check_in,
    booking.tanggal_check_out,
	
	"user".uniqueid AS user_id,
    "user".nama as nama_user
	
	FROM booking
	
	INNER JOIN hotel_kamar ON booking.kamar_id = hotel_kamar.uniqueid
	INNER JOIN "user" ON booking.user_id = "user".uniqueid
	
	INNER JOIN hotel ON hotel_kamar.hotel_id = hotel.uniqueid;