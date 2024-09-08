const Joi = require('joi');

const mahasiswaSchema = Joi.object({
    nim: Joi.number().integer().required().messages({
        'number.base': 'NIM harus berupa angka',
        'any.required': 'NIM tidak boleh kosong'
    }),
    nama_lengkap: Joi.string().min(3).max(100).required().messages({
        'string.base': 'Nama lengkap harus berupa string',
        'string.min': 'Nama lengkap minimal 3 karakter',
        'string.max': 'Nama lengkap maksimal 100 karakter',
        'any.required': 'Nama lengkap tidak boleh kosong'
    }),
    kelas: Joi.string().max(20).required().messages({
        'string.base': 'Kelas harus berupa string',
        'string.max': 'Kelas maksimal 20 karakter',
        'any.required': 'Kelas tidak boleh kosong'
    }),
    alamat: Joi.string().required().messages({
        'string.base': 'Alamat harus berupa string',
        'any.required': 'Alamat tidak boleh kosong'
    })
});

module.exports = mahasiswaSchema;
