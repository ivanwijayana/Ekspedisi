const Admin = require ('../models/adminModel');
const router = require ('express').Router();

router.get ('/', async (req,res) => {
    const admin = await Admin.findAll();
    res.json(admin)
});

router.get ('/:id', async (req,res) => {
    const admin = await Admin.findOne({
        where:{
            admin_id:req.params.id
        }
    });
    res.json(admin)
});

router.post('/', async(req,res)=>{
    const adminEmail = req.body.admin_email;
    const password = req.body.password;
    const admin = await Admin.create({
        admin_email:adminEmail,
        password:password
    });
    res.json(admin)
});

router.put('/:id', async(req,res)=>{
    const adminId = req.params.id;
    const adminEmail = req.body.admin_email;
    const password = req.body.password;
    const admin = await Admin.update({
        admin_email:adminEmail,
        password:password
    },
    {
        where:{
            admin_id:adminId
        }
    });
    res.json(admin)
});

router.delete ('/delete/:id', async (req,res)=>{
    const idTableAdmin = req.params.id;
    const admin = await Admin.destroy({
        where:{
            admin_id:idTableAdmin
        }
    });
    res.json(admin)
})

module.exports = router;