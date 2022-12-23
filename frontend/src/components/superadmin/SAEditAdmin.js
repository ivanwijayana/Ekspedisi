import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function SAEditAdmin(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [idadmin, setIdAdmin] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        try{
            axios.get(`http://localhost:3010/sadmin/${id}`).then((res) => {
            setIdAdmin(res.data.admin_id);
            setEmail(res.data.admin_email);
            setPassword(res.data.password);
        });
        } catch (error){
            alert(error)
        }
    }, [id]);

    const data = {
        admin_id: idadmin,
        admin_email: email,
        password: password
    };
    function UpdateAdmin(e) {
        e.preventDefault();
        try{axios.put(`http://localhost:3010/sadmin/${id}`, data).then(navigate("/admin"));}
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
                                Email Admin
                            </label>
                            <input type="text" id="nama_cabang" name="nama_cabang" placeholder="Enter New Name" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email}/>
                            
                            <label for="street" className=" form-control-label">
                                Password
                            </label>
                            <input type="text" id="lokasi" name="lokasi" placeholder="Enter New Password" className="form-control" onChange={(e) => setPassword(e.target.value)} value={password}/>
                            </div>
                        </div>
                        <div className="but">
                            <button type="submit" className="btn btn-primary">Simpan</button>
                        </div>
                    </div>
                </form>
            </div>
    )
}

export default SAEditAdmin;