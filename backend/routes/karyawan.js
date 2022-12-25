const Karyawan = require ('../models/karyawanModel');
const router = require ('express').Router();

router.get ('/', async (req,res) => {
    const karyawan = await Karyawan.findAll();
    res.json(karyawan)
});

router.post('/', async(req,res)=>{
    const idKaryawan = req.body.id_karyawan;
    const namaKaryawan = req.body.nama_karyawan;
    const cabangKaryawan = req.body.cabang_karyawan;
    const karyawan = await Karyawan.create({
        id_karyawan: idKaryawan,
        nama_karyawan:namaKaryawan,
        cabang_karyawan:cabangKaryawan
    });
    res.json(karyawan)
});

router.put('/:id', async(req,res)=>{
    const idTableKaryawan = req.params.id;
    const idKaryawan = req.body.id_karyawan;
    const namaKaryawan = req.body.nama_karyawan;
    const cabangKaryawan = req.body.cabang_karyawan;
    const karyawan = await Karyawan.create({
        id_karyawan: idKaryawan,
        nama_cabang:namaKaryawan,
        cabang_karyawan:cabangKaryawan
    }, 
    {
        where:{
            id_table_karyawan:idTableKaryawan
        }
    });
    res.json(karyawan)
});

router.delete ('/delete/:id', async (req,res)=>{
    const idTableKaryawan = req.params.id;
    const karyawan = await Karyawan.destroy({
        where:{
            id_table_karyawan:idTableKaryawan
        }
    });
    res.json(karyawan)
})

module.exports = router;