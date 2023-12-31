PGDMP     9                    {            db_hotel    15.4    15.4                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16452    db_hotel    DATABASE        CREATE DATABASE db_hotel WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_Indonesia.1252';
    DROP DATABASE db_hotel;
                postgres    false            �            1259    16474    booking    TABLE     �  CREATE TABLE public.booking (
    uniqueid character varying(10) NOT NULL,
    kamar_id character varying(100) NOT NULL,
    harga_kamar integer NOT NULL,
    pendapatan_bersih integer,
    pendapatan_sales integer,
    sales_code character varying(100),
    tanggal_check_in timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    tanggal_check_out timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    user_id character varying(100) NOT NULL
);
    DROP TABLE public.booking;
       public         heap    postgres    false            �            1259    16453    hotel    TABLE     �   CREATE TABLE public.hotel (
    uniqueid character varying(10) NOT NULL,
    nama character varying(100) NOT NULL,
    alamat text,
    no_hp character varying(13) NOT NULL
);
    DROP TABLE public.hotel;
       public         heap    postgres    false            �            1259    16467    hotel_kamar    TABLE       CREATE TABLE public.hotel_kamar (
    uniqueid character varying(10) NOT NULL,
    hotel_id character varying(100) NOT NULL,
    nama_kamar character varying(100) NOT NULL,
    nomor_kamar character varying(10) NOT NULL,
    harga integer,
    deskripsi text
);
    DROP TABLE public.hotel_kamar;
       public         heap    postgres    false            �            1259    16460    user    TABLE     �   CREATE TABLE public."user" (
    uniqueid character varying(10) NOT NULL,
    nama character varying(100) NOT NULL,
    no_hp character varying(13) NOT NULL,
    alamat text,
    sales_code character varying(100),
    saldo bigint
);
    DROP TABLE public."user";
       public         heap    postgres    false                      0    16474    booking 
   TABLE DATA           �   COPY public.booking (uniqueid, kamar_id, harga_kamar, pendapatan_bersih, pendapatan_sales, sales_code, tanggal_check_in, tanggal_check_out, user_id) FROM stdin;
    public          postgres    false    217   �                 0    16453    hotel 
   TABLE DATA           >   COPY public.hotel (uniqueid, nama, alamat, no_hp) FROM stdin;
    public          postgres    false    214   �       
          0    16467    hotel_kamar 
   TABLE DATA           d   COPY public.hotel_kamar (uniqueid, hotel_id, nama_kamar, nomor_kamar, harga, deskripsi) FROM stdin;
    public          postgres    false    216   �       	          0    16460    user 
   TABLE DATA           R   COPY public."user" (uniqueid, nama, no_hp, alamat, sales_code, saldo) FROM stdin;
    public          postgres    false    215   I       y           2606    16478    booking booking_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.booking
    ADD CONSTRAINT booking_pkey PRIMARY KEY (uniqueid);
 >   ALTER TABLE ONLY public.booking DROP CONSTRAINT booking_pkey;
       public            postgres    false    217            w           2606    16473    hotel_kamar hotel_kamar_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.hotel_kamar
    ADD CONSTRAINT hotel_kamar_pkey PRIMARY KEY (uniqueid);
 F   ALTER TABLE ONLY public.hotel_kamar DROP CONSTRAINT hotel_kamar_pkey;
       public            postgres    false    216            s           2606    16459    hotel hotel_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.hotel
    ADD CONSTRAINT hotel_pkey PRIMARY KEY (uniqueid);
 :   ALTER TABLE ONLY public.hotel DROP CONSTRAINT hotel_pkey;
       public            postgres    false    214            u           2606    16466    user user_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (uniqueid);
 :   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_pkey;
       public            postgres    false    215               A   x�s�6000�� Q��  �89c�@(���	����Ј�� ��BA�`��.C�=... Ή�         v   x��0000��L�,V��/I�����S���,O�K��4�04�42�4�� *4�t�M,BQ�X��TZ�	$��---�Z���8���D!�4�$��'?=�d�������W� ��&+      
   �   x�]�A
�0EדS�-�D�]j�B)�K7BE���}�4.�Yd�_��n��u�oS�i��^�WU��	��K��} �T 6 z΀P�Il�z��{@�T���N��`�g1�hn��q{�;�vQ����#UҰ1ɿ�)�(|7Ѽ/�$�� J��$��8�I.	#��=~{��R_�(Y@      	   i   x�M̱
�0���1����hG�I�\
J�B��73�p��LD}�A�6�v�G8�Y0ɢIN�a�/��kk���;'��g-�X�=������`��RJ=��     