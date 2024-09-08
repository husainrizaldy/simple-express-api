const express = require('express');
const router = express.Router();
const mahasiswaController = require('../controllers/mahasiswaController');
const errorHandler = require('../middlewares/errorHandler');
const { check } = require('express-validator');

const validateMahasiswa = [
    check('nim').isInt().withMessage('NIM harus berupa angka'),
    check('nama_lengkap').isString().isLength({ min: 3 }).withMessage('Nama lengkap harus berupa string dan minimal 3 karakter'),
    check('kelas').isString().isLength({ max: 20 }).withMessage('Kelas harus berupa string dan maksimal 20 karakter'),
    
];

const validateNimParams = [
    check('nim').isInt().withMessage('NIM harus berupa angka')
]

router.get('/', mahasiswaController.getAllMahasiswa);
router.get('/:nim', validateNimParams, errorHandler, mahasiswaController.getMahasiswaByNim);
router.post('/', validateMahasiswa, errorHandler, mahasiswaController.createMahasiswa);
router.put('/', validateMahasiswa, errorHandler, mahasiswaController.updateMahasiswa);
router.delete('/', validateNimParams, errorHandler, mahasiswaController.deleteMahasiswa);

module.exports = router;
