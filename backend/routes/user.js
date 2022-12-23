const User = require ('../models/userModel');
const router = require ('express').Router();


router.get ('/', async (req,res) => {
    const user = await User.findAll();
    res.json(user)
});

router.get ('/:id', async (req,res) => {
    const user = await User.findOne({
        where:{
            id_table_user:req.params.id
        }
    });
    res.json(user)
});

router.post('/', async(req,res)=>{
    const idUser = req.body.user_id;
    const namaUser = req.body.username;
    const password = req.body.password;
    const user = await User.create({
        user_id: idUser,
        username:namaUser,
        password:password
    });
    res.json(user)
});


router.put('/:id', async(req,res)=>{
    const idTableUser = req.params.id;
    const idUser = req.body.user_id;
    const namaUser = req.body.username;
    const password = req.body.password;
    const user = await User.update({
        user_id: idUser,
        password:namaUser,
        password:password
    },
    {
        where:{
            id_table_user:idTableUser
        }
    });
    res.json(user)
});

router.delete ('/delete/:id', async (req,res)=>{
    const idTableUser = req.params.id;
    const user = await User.destroy({
        where:{
            id_table_user:idTableUser
        }
    });
    res.json(user)
})

module.exports = router;