import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SAFormUser(){
    const [nama, setNama] = useState('');
    const [password, setPassword] = useState('');
    const [id, setId] = useState('');
    const navigate = useNavigate();

    const saveUser = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3010/user', {
            user_id: id,
            username: nama,
            password: password
        });
        navigate("/user");
    }


    return(
        <div className="col-lg-6" style={{margin:'10px 10px'}}>
            <a href="/user">
                    <button type="button" class="btn btn-primary fa fa-arrow-circle-left" >  Kembali</button>
                </a>
                    <form className="form-horizontal" onSubmit={saveUser}>
                    <div className="card" style={{marginTop:'10px'}}>
                        <div className="card-header"><strong>Form User</strong></div>
                        <div className="card-body card-block">
                            <div className="form-group">
                                <label for="company" className=" form-control-label">
                                    ID User
                                </label>
                            <input type="text" id="id_cabang" name="id_cabang" placeholder="Enter Cabang ID" className="form-control" onChange={(e) => setId(e.target.value)} value={id}/>                                
                            
                            <label for="vat" className=" form-control-label">
                                Nama User
                            </label>
                            <input type="text" id="nama_cabang" name="nama_cabang" placeholder="Enter Cabang Name" className="form-control" onChange={(e) => setNama(e.target.value)} value={nama}/>
                            
                            <label for="street" className=" form-control-label">
                                Password
                            </label>
                            <input type="text" id="lokasi" name="lokasi" placeholder="Enter Cabang Location" className="form-control" onChange={(e) => setPassword(e.target.value)} value={password}/>
                            </div>
                        </div>
                        <div className="but">
                            <button type="submit" className="btn btn-primary" style={{margin:'10px 10px'}}>Simpan</button>
                        </div>
                    </div>
                </form>
            </div>
    )
}

export default SAFormUser;

