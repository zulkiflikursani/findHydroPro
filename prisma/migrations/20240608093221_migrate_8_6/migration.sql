/*
  Warnings:

  - You are about to drop the column `name` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `user` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `company` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `no_telpon` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `users_user_key` ON `users`;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `name`,
    DROP COLUMN `user`,
    ADD COLUMN `accessToken` VARCHAR(191) NOT NULL DEFAULT 'NULL',
    ADD COLUMN `company` VARCHAR(191) NOT NULL,
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `nama` VARCHAR(191) NULL,
    ADD COLUMN `no_telpon` VARCHAR(191) NOT NULL,
    ADD COLUMN `password` VARCHAR(191) NOT NULL,
    ADD COLUMN `refreshToken` VARCHAR(191) NOT NULL DEFAULT 'NULL';

-- CreateTable
CREATE TABLE `akunheaders` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kode_akun_header` VARCHAR(191) NOT NULL,
    `nama_akun_header` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `akunheaders_kode_akun_header_key`(`kode_akun_header`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `company` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_company` VARCHAR(191) NOT NULL,
    `deskripsi` VARCHAR(191) NOT NULL,
    `alamat` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `company_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `akundetail` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `company` VARCHAR(191) NOT NULL,
    `kode_akun_header` VARCHAR(191) NOT NULL,
    `kode_akun` VARCHAR(191) NOT NULL,
    `nama_akun` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_saldo_awal` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `company` VARCHAR(191) NOT NULL,
    `kode_akun` VARCHAR(191) NOT NULL,
    `bulan` VARCHAR(191) NOT NULL,
    `tahun` VARCHAR(191) NOT NULL,
    `saldo` INTEGER NOT NULL,

    UNIQUE INDEX `tb_saldo_awal_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_produk` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `company` VARCHAR(191) NOT NULL,
    `kode_produk` VARCHAR(191) NOT NULL,
    `nama_produk` VARCHAR(191) NOT NULL,
    `deskripsi` VARCHAR(191) NOT NULL,
    `harga_beli` INTEGER NOT NULL,
    `harga_jual` INTEGER NOT NULL,

    UNIQUE INDEX `tb_produk_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_saldo_awal_produk` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `company` VARCHAR(191) NOT NULL,
    `kode_produk` VARCHAR(191) NOT NULL,
    `bulan` VARCHAR(191) NOT NULL,
    `tahun` VARCHAR(191) NOT NULL,
    `qty` INTEGER NOT NULL,

    UNIQUE INDEX `tb_saldo_awal_produk_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_transaksi_header` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `company` VARCHAR(191) NOT NULL,
    `kode_transaksi` VARCHAR(191) NOT NULL,
    `tgl_transaksi` VARCHAR(191) NOT NULL,
    `jenis_transaksi` VARCHAR(191) NOT NULL,
    `deksripsi` VARCHAR(191) NOT NULL,
    `user` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `tb_transaksi_header_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_transaksi_detail` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kode_transaksi` VARCHAR(191) NOT NULL,
    `no_akun` VARCHAR(191) NOT NULL,
    `kode_produk` VARCHAR(191) NOT NULL,
    `qty` INTEGER NOT NULL,
    `harga` INTEGER NOT NULL,

    UNIQUE INDEX `tb_transaksi_detail_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_user_customer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `level` INTEGER NOT NULL,
    `cusctomer_company` VARCHAR(191) NOT NULL,
    `no_telpon` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `tb_user_customer_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_keranjang` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_customer` VARCHAR(191) NOT NULL,
    `kode_produk` VARCHAR(191) NOT NULL,
    `qty` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `tb_keranjang_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `users_email_key` ON `users`(`email`);
