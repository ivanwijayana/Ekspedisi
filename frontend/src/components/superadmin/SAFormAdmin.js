<<<<<<< HEAD
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SAFormAdmin(){
    const [nama, setNama] = useState('');
    const [password, setPassword] = useState('');
    const [idadmin, setIdAdmin] = useState('');
    const navigate = useNavigate();

    const saveAdmin = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3010/sadmin', {
            admin_id: idadmin,
            username: nama,
            password: password
        });
        navigate("/sadmin");
    }


    return(
        <div className="col-lg-6" style={{margin:'10px 10px'}}>
            <a href="/sadmin">
                    <button type="button" class="btn btn-primary fa fa-arrow-circle-left" >  Kembali</button>
                </a>
                    <form className="form-horizontal" onSubmit={saveAdmin}>
                    <div className="card" style={{marginTop:'10px'}}>
                        <div className="card-header"><strong>Form Admin</strong></div>
                        <div className="card-body card-block">
                            <div className="form-group">
                                <label for="company" className=" form-control-label">
                                    ID Admin
                                </label>
                            <input type="text" id="id_cabang" name="id_cabang" placeholder="Enter User ID" className="form-control" onChange={(e) => setIdAdmin(e.target.value)} value={idadmin}/>                                
                            
                            <label for="vat" className=" form-control-label">
                                Nama Admin
                            </label>
                            <input type="text" id="nama_cabang" name="nama_cabang" placeholder="Enter Username" className="form-control" onChange={(e) => setNama(e.target.value)} value={nama}/>
                            
                            <label for="street" className=" form-control-label">
                                Password
                            </label>
                            <input type="text" id="lokasi" name="lokasi" placeholder="Enter Password" className="form-control" onChange={(e) => setPassword(e.target.value)} value={password}/>
                            </div>
                        </div>
                        <div className="but">
                            <button onClick={() => {window.location.href="/sadmin"}} type="submit" className="btn btn-primary" style={{margin:'10px 10px'}}>Simpan</button>
                        </div>
                    </div>
                    </form>
            </div>
    )
}

export default SAFormAdmin;
=======
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SAFormAdmin(){
    const [nama, setNama] = useState('');
    const [id, setId] = useState('');
    const navigate = useNavigate();

    const saveAdmin = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3010/admin', {
            admin_email: id,
            password: nama,
        });
        navigate("/admin");
    }

    return(
        <div class="animated fadeIn">
                <a href="/admin">
                    <button type="button" class="btn btn-primary fa fa-arrow-circle-left" >  Kembali</button>
                </a>
                <div class="col-lg-6">
                <form class="form-horizontal" onSubmit={saveAdmin}>
                    <div class="card">
                        <div class="card-header"><strong>Form Admin</strong></div>
                        <div class="card-body card-block">          
                            <div class="form-group">
                                <label for="vat" class=" form-control-label">Email/Username</label>
                                <input type="text" placeholder="Enter Email/Username" class="form-control" onChange={(e) => setId(e.target.value)} value={id}/>
                            </div>
                            <div class="form-group">
                                <label for="street" class=" form-control-label">Password</label>
                                <input type="text" placeholder="Enter Password" class="form-control" onChange={(e) => setNama(e.target.value)} value={nama}/>
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

export default SAFormAdmin;
>>>>>>> 3c6f8d7e7e8edd209141df9a3026932c769eade2
