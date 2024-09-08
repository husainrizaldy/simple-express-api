const Mahasiswa = require('../models/mahasiswa');
const mahasiswaSchema = require('../validations/mahasiswaValidation');
const response = require('../utils/response');

exports.getAllMahasiswa = async (req, res) => {
    try {
        const mahasiswa = await Mahasiswa.findAll();
        response(200, mahasiswa, 'Data retrieved successfully', res);
    } catch (error) {
        response(500, null, error.message, res);
    }
};

exports.getMahasiswaByNim = async (req, res) => {
    try {
        const { nim } = req.params;
        const mahasiswa = await Mahasiswa.findOne({ where: { nim } });
        if (!mahasiswa) return response(404, null, 'Data not found', res);
        response(200, mahasiswa, 'Data retrieved successfully', res);
    } catch (error) {
        response(500, null, error.message, res);
    }
};

exports.createMahasiswa = async (req, res) => {
    try {
        const { error } = mahasiswaSchema.validate(req.body);
        if (error) return response(400, null, error.details[0].message, res);

        const { nim, nama_lengkap, kelas, alamat } = req.body;
        const newMahasiswa = await Mahasiswa.create({ nim, nama_lengkap, kelas, alamat });
        response(201, newMahasiswa, 'Data added successfully', res);
    } catch (error) {
        response(500, null, error.message, res);
    }
};

exports.updateMahasiswa = async (req, res) => {
    try {
        const { error } = mahasiswaSchema.validate(req.body);
        if (error) return response(400, null, error.details[0].message, res);
        
        const { nim } = req.body;
        const mahasiswa = await Mahasiswa.findOne({ where: { nim } });
        if (!mahasiswa) return response(404, null, 'Data not found', res);

        const { nama_lengkap, kelas, alamat } = req.body;
        await Mahasiswa.update({ nama_lengkap, kelas, alamat }, { where: { nim } });
        response(200, null, 'Data updated successfully', res);
    } catch (error) {
        response(500, null, error.message, res);
    }
};

exports.deleteMahasiswa = async (req, res) => {
    try {
        const { nim } = req.body;
        const mahasiswa = await Mahasiswa.findOne({ where: { nim } });
        if (!mahasiswa) return response(404, null, 'Data not found', res);

        await Mahasiswa.destroy({ where: { nim } });
        response(200, null, 'Data deleted successfully', res);
    } catch (error) {
        response(500, null, error.message, res);
    }
};