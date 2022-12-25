const Sadmin = require ('../models/adminModel');
const router = require ('express').Router();


router.get ('/', async (req,res) => {
    const sadmin = await Sadmin.findAll();
    res.json(sadmin)
});

router.get ('/:id', async (req,res) => {
    const sadmin = await Sadmin.findOne({
        where:{
            id_table_admin:req.params.id
        }
    });
    res.json(sadmin)
});

router.post('/', async(req,res)=>{
    const idAdmin = req.body.admin_id;
    const namaAdmin = req.body.username;
    const password = req.body.password;
    const sadmin = await Sadmin.create({
        admin_id: idAdmin,
        username:namaAdmin,
        password:password
    });
    res.json(sadmin)
});


router.put('/:id', async(req,res)=>{
    const idTableAdmin = req.params.id;
    const idAdmin = req.body.admin_id;
    const namaAdmin = req.body.username;
    const password = req.body.password;
    const sadmin = await Sadmin.update({
        admin_id: idAdmin,
        username:namaAdmin,
        password:password
    },
    {
        where:{
            id_table_admin:idTableAdmin
        }
    });
    res.json(sadmin)
});

router.delete ('/delete/:id', async (req,res)=>{
    const idTableAdmin = req.params.id;
    const sadmin = await Sadmin.destroy({
        where:{
            id_table_admin:idTableAdmin
        }
    });
    res.json(sadmin)
})

module.exports = router;