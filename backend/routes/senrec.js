const Senrec = require ('../models/senrecModel');
const router = require ('express').Router();

router.get ('/', async (req,res) => {
    const senrec = await Senrec.findAll();
    res.json(senrec)
});

router.get ('/:id', async (req,res) => {
    const senrec = await Senrec.findOne({
        where:{
            id_sen_rec:req.params.id
        }
    });
    res.json(senrec)
});

router.post('/', async(req,res)=>{
    const idBarang = req.body.id_barang;
    const idAdmin = req.body.id_admin;
    const namaAdmin = req.body.nama_admin;
    const namaPenerima = req.body.nama_penerima;
    const alamat = req.body.alamat;
    const resi = req.body.resi;
    const idEkspedisi = req.body.id_pengiriman;
    const senrec = await Senrec.create({
        id_barang: idBarang,
        id_admin: idAdmin,
        nama_admin:namaAdmin,
        nama_penerima:namaPenerima,
        alamat:alamat,
        resi:resi,
        id_pengiriman:idEkspedisi
    });
    res.json(senrec)
});

router.put('/:id', async(req,res)=>{
    const idSenrec = req.params.id;
    const idBarang = req.body.id_barang;
    const idAdmin = req.body.id_admin;
    const namaAdmin = req.body.nama_admin;
    const namaPenerima = req.body.nama_penerima;
    const alamat = req.body.alamat;
    const resi = req.body.resi;
    const idEkspedisi = req.body.id_pengiriman;
    const senrec = await Senrec.update({
        id_barang: idBarang,
        id_admin: idAdmin,
        nama_admin:namaAdmin,
        nama_penerima:namaPenerima,
        alamat:alamat,
        resi:resi,
        id_pengiriman:idEkspedisi
    }, {
        where:{
            id_sen_rec: idSenrec
        }
    });
    res.json(senrec)
});

router.delete ('/delete/:id', async (req,res)=>{
    const idSenrec = req.params.id;
    const senrec = await Senrec.destroy({
        where:{
            id_sen_rec: idSenrec
        }
    });
    res.json(senrec)
})

module.exports = router;