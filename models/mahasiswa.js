const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Mahasiswa = sequelize.define('Mahasiswa', {
    nim: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false
    },
    nama_lengkap: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    kelas: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    alamat: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    tableName: 'mahasiswa',
    timestamps: false
});

module.exports = Mahasiswa;
