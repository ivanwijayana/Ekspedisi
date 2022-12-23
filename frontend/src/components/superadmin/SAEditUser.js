import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


function SAEditUser(){
    const [nama, setNama] = useState('');
    const [password, setPassword] = useState('');
    const [iduser, setIdUser] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        try{
            axios.get(`http://localhost:3010/user/${id}`).then((res) => {
            setIdUser(res.data.user_id);
            setNama(res.data.username);
            setPassword(res.data.password);
        });
        } catch (error){
            alert(error)
        }
    }, [id]);

    const data = {
        user_id: iduser,
        username: nama,
        password: password
    };
    function UpdateUser(e) {
        e.preventDefault();
        try{axios.put(`http://localhost:3010/user/${id}`, data).then(navigate("/user"));}
        catch (error){
            alert(error)
        }
    }


    return(
        <div className="col-lg-6">
                    <form className="form-horizontal" onSubmit={UpdateUser}>
                    <div className="card">
                        <div className="card-header"><strong>Form User</strong></div>
                        <div className="card-body card-block">
                            <div className="form-group">
                                <label for="company" className=" form-control-label">
                                    ID User
                                </label>
                            <input type="text" id="id_cabang" name="id_cabang" placeholder="Enter User ID" className="form-control" onChange={(e) => setIdUser(e.target.value)} value={iduser}/>                                
                            
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
                            <button onClick={() => {window.location.href="/user"}} type="submit" className="btn btn-primary">Simpan</button>
                        </div>
                        
                    </div>
                </form>
            </div>
    )
}

export default SAEditUser;
