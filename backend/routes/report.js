const Report = require ('../models/reportModel');
const router = require ('express').Router();

router.get ('/', async (req,res) => {
    const report = await Report.findAll();
    res.json(report)
});

router.get ('/:id', async (req,res) => {
    const report = await Report.findOne({
        where:{
            report_id:req.params.id
        }
    });
    res.json(report)
});

router.post('/', async(req,res)=>{
    const resi = req.body.resi;
    const bukti = req.body.bukti;
    const report = await Report.create({
        resi:resi,
        bukti:bukti
    });
    res.json(report)
});

router.put('/:id', async(req,res)=>{
    const id = req.params.id;
    const resi = req.body.resi;
    const bukti = req.body.bukti;
    const report = await Report.update({
        resi:resi,
        bukti:bukti
    },
    {
        where:{
            id:id
        }
    });
    res.json(report)
});

router.delete ('/delete/:id', async (req,res)=>{
    const id = req.params.id;
    const report = await Report.destroy({
        where:{
            id:id
        }
    });
    res.json(report)
})

module.exports = router;