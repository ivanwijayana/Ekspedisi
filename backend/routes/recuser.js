const Recuser = require ('../models/recuserModel');
const router = require ('express').Router();

router.get ('/', async (req,res) => {
    const recuser = await Recuser.findAll();
    res.json(recuser)
});

router.get ('/:id', async (req,res) => {
    const recuser = await Recuser.findOne({
        where:{
            id_rec_user:req.params.id
        }
    });
    res.json(recuser)
});

router.post('/', async(req,res)=>{
    const idBarang = req.body.id_barang;
    const namaBarang = req.body.nama_barang;
    const namaCabangAsal = req.body.nama_cabang_asal;
    const namaPengirim = req.body.nama_pengirim;
    const namaPenerima = req.body.nama_penerima;
    const kota = req.body.kota;
    const alamat = req.body.alamat;
    const resiBarang = req.body.resi_barang;
    const recuser = await Recuser.create({
        id_barang: idBarang,
        nama_barang:namaBarang,
        nama_cabang_asal:namaCabangAsal,
        nama_pengirim:namaPengirim,
        nama_penerima:namaPenerima,
        kota: kota,
        alamat:alamat,
        resi_barang:resiBarang
    });
    res.json(recuser)
});

router.put('/:id', async(req,res)=>{
    const idRecuser = req.params.id;
    const idBarang = req.body.id_barang;
    const namaBarang = req.body.nama_barang;
    const namaCabangAsal = req.body.nama_cabang_asal;
    const namaPengirim = req.body.nama_pengirim;
    const namaPenerima = req.body.nama_penerima;
    const kota = req.body.kota;
    const alamat = req.body.alamat;
    const resiBarang = req.body.resi_barang;
    const recuser = await Recuser.update({
        id_barang: idBarang,
        nama_barang:namaBarang,
        nama_cabang_asal:namaCabangAsal,
        nama_pengirim:namaPengirim,
        nama_penerima:namaPenerima,
        kota: kota,
        alamat:alamat,
        resi_barang:resiBarang
    },
    {
        where:{
            id_rec_user: idRecuser
        }
    });
    res.json(recuser)
});

router.delete ('/delete/:id', async (req,res)=>{
    const idRecuser = req.params.id;
    const recuser = await Recuser.destroy({
        where:{
            id_rec_user: idRecuser
        }
    });
    res.json(recuser)
})

module.exports = router;