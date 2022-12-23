const User = require ('../models/userModel');
const router = require ('express').Router();

router.get ('/', async (req,res) => {
    const user = await User.findAll();
    res.json(user)
});

router.post('/', async(req,res)=>{
    const id = req.body.user_id;
    const nama = req.body.username;
    const password = req.body.password;
    const user = await User.create({
        user_id: id,
        username: nama,
        password: password
    });
    res.json(user)
});

router.put('/:id', async(req,res)=>{
    const idTableUser = req.params.id;
    const id = req.body.user_id;
    const nama = req.body.username;
    const password = req.body.password;
    const user = await User.update({
        user_id:id,
        username:nama,
        password:password
    },
    {
        where:{
            id_tabel_user:idTableUser
        }
    });
    res.json(user)
});

router.delete ('/delete/:id', async (req,res)=>{
    const idTableUser = req.params.id;
    const user = await User.destroy({
        where:{
            user_id:idTableUser
        }
    });
    res.json(user)
})

module.exports = router;