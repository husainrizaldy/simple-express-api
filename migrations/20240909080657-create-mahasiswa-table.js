'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('mahasiswa', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      nim: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
      },
      nama_lengkap: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      kelas: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      alamat: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: Sequelize.literal('NULL ON UPDATE CURRENT_TIMESTAMP')
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('mahasiswa');
  }
};
