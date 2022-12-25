<<<<<<< HEAD
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


function SAEditAdmin(){
    const [nama, setNama] = useState('');
    const [password, setPassword] = useState('');
    const [idadmin, setIdAdmin] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        try{
            axios.get(`http://localhost:3010/sadmin/${id}`).then((res) => {
            setIdAdmin(res.data.admin_id);
            setNama(res.data.username);
            setPassword(res.data.password);
        });
        } catch (error){
            alert(error)
        }
    }, [id]);

    const data = {
        admin_id: idadmin,
        username: nama,
        password: password
    };
    function UpdateAdmin(e) {
        e.preventDefault();
        try{axios.put(`http://localhost:3010/sadmin/${id}`, data).then(navigate("/sadmin"));}
        catch (error){
            alert(error)
        }
    }


    return(
        <div className="col-lg-6">
                    <form className="form-horizontal" onSubmit={UpdateAdmin}>
                    <div className="card">
                        <div className="card-header"><strong>Form Admin</strong></div>
                        <div className="card-body card-block">
                            <div className="form-group">
                                <label for="company" className=" form-control-label">
                                    ID Admin
                                </label>
                            <input type="text" id="id_cabang" name="id_cabang" placeholder="Enter User ID" className="form-control" onChange={(e) => setIdAdmin(e.target.value)} value={idadmin}/>                                
                            
                            <label for="vat" className=" form-control-label">
                                Username
                            </label>
                            <input type="text" id="nama_cabang" name="nama_cabang" placeholder="Enter New Name" className="form-control" onChange={(e) => setNama(e.target.value)} value={nama}/>
                            
                            <label for="street" className=" form-control-label">
                                Password
                            </label>
                            <input type="text" id="lokasi" name="lokasi" placeholder="Enter New Password" className="form-control" onChange={(e) => setPassword(e.target.value)} value={password}/>
                            </div>
                        </div>
                        <div className="but">
                            <button onClick={() => {window.location.href="/sadmin"}} type="submit" className="btn btn-primary">Simpan</button>
                        </div>
                        
                    </div>
                </form>
            </div>
    )
}

export default SAEditAdmin;
=======
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function SAEditAdmin() {
    const [nama, setNama] = useState('');
    const [idcabang, setIdCabang] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        try {
            axios.get(`http://localhost:3010/admin/${id}`).then((res) => {
                setIdCabang(res.data.admin_email);
                setNama(res.data.password);
            });
        } catch (error) {
            alert(error)
        }
    }, [id]);

    function UpdateCabang(e) {
        e.preventDefault();
        axios.put(`http://localhost:3010/admin/${id}`, {
            admin_email: idcabang,
            password: nama,
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            console.log(res);
            navigate("/admin");
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <div class="animated fadeIn">
            <a href="/admin">
                <button type="button" class="btn btn-primary fa fa-arrow-circle-left" >  Kembali</button>
            </a>
            <div class="col-lg-6">
                <form class="form-horizontal" onSubmit={UpdateCabang}>
                    <div class="card">
                        <div class="card-header"><strong>Form Admin</strong></div>
                        <div class="card-body card-block">
                            <div class="form-group">
                                <label for="vat" class=" form-control-label">Email/Username</label>
                                <input type="text" placeholder="Enter Email/Username" class="form-control" onChange={(e) => setIdCabang(e.target.value)} value={idcabang} />
                            </div>
                            <div class="form-group">
                                <label for="street" class=" form-control-label">Password</label>
                                <input type="text" placeholder="Enter Password" class="form-control" onChange={(e) => setNama(e.target.value)} value={nama} />
                            </div>
                        </div>
                        <div class="but">
                            <button onClick={() => {window.location.href="/admin"}} type="submit" class="btn btn-primary">Simpan</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SAEditAdmin;

>>>>>>> 3c6f8d7e7e8edd209141df9a3026932c769eade2
