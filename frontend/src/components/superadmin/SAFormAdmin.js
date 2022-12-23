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
                            <button type="submit" class="btn btn-primary">Simpan</button>
                        </div>
                    </div>
                </form>
                </div>
            </div>
    )
}

export default SAFormAdmin;
