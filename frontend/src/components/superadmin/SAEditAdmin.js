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
                            <button type="submit" class="btn btn-primary">Simpan</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SAEditAdmin;

