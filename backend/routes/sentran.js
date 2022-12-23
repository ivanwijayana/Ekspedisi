const Sentran = require ('../models/sentranModel');
const router = require ('express').Router();

router.get ('/', async (req,res) => {
    const sentran = await Sentran.findAll();
    res.json(sentran)
});

router.get ('/:id', async (req,res) => {
    const sentran = await Sentran.findOne({
        where:{
            id_sen_tran:req.params.id
        }
    });
    res.json(sentran)
});

router.post('/', async(req,res)=>{
    const idBarang = req.body.id_barang;
    const idCabangAsal = req.body.id_cabang_asal;
    const namaCabangAsal = req.body.nama_cabang_asal;
    const idAdmin = req.body.id_admin;
    const namaAdmin = req.body.nama_admin;
    const idCabangPenerima = req.body.id_cabang_penerima;
    const namaCabangPenerima = req.body.nama_cabang_penerima;
    const resi_barang = req.body.resi_barang;
    const idEkspedisi = req.body.id_ekspedisi;
    const sentran = await Sentran.create({
        id_barang: idBarang,
        id_cabang_asal: idCabangAsal,
        nama_cabang_asal:namaCabangAsal,
        id_admin: idAdmin,
        nama_admin:namaAdmin,
        id_cabang_penerima: idCabangPenerima,
        nama_cabang_penerima:namaCabangPenerima,
        resi_barang:resi_barang,
        id_ekspedisi:idEkspedisi
    });
    res.json(sentran)
});

router.put('/:id', async(req,res)=>{
    const idSentran = req.body.id_sen_tran;
    const idBarang = req.body.id_barang;
    const idCabangAsal = req.body.id_cabang_asal;
    const namaCabangAsal = req.body.nama_cabang_asal;
    const idAdmin = req.body.id_admin;
    const namaAdmin = req.body.nama_admin;
    const idCabangPenerima = req.body.id_cabang_penerima;
    const namaCabangPenerima = req.body.nama_cabang_penerima;
    const resi_barang = req.body.resi_barang;
    const idEkspedisi = req.body.id_ekspedisi;
    const sentran = await Sentran.update({
        id_barang: idBarang,
        id_cabang_asal: idCabangAsal,
        nama_cabang_asal:namaCabangAsal,
        id_admin: idAdmin,
        nama_admin:namaAdmin,
        id_cabang_penerima: idCabangPenerima,
        nama_cabang_penerima:namaCabangPenerima,
        resi_barang:resi_barang,
        id_ekspedisi:idEkspedisi
    },
    {
        where:{
            id_sen_tran: idSentran
        }
    });
    res.json(sentran)
});

router.delete ('/delete/:id', async (req,res)=>{
    const idSentran = req.params.id;
    const sentran = await Sentran.destroy({
        where:{
            id_sen_tran: idSentran
        }
    });
    res.json(sentran)
})

module.exports = router;