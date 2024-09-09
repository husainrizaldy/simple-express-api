'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('mahasiswa', [
      {
        id: 1,
        nim: 123456,
        nama_lengkap: 'hitler',
        kelas: 'IF-01',
        alamat: 'Jl. Kebon Jeruk No. 12'
      },
      {
        id: 2,
        nim: 123457,
        nama_lengkap: 'ghandi',
        kelas: 'IF-02',
        alamat: 'Jl. Merpati No. 7'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('mahasiswa', null, {});
  }
};
