import React, { useState, useEffect } from "react";
import axios from "axios";

function SATambahAdmin() {
    const [admin, setAdmin] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3010/admin')
            .then(res => {
                setAdmin(res.data);
            }).catch(err => {
                console.log(err);
            })
    }, []);

    const deleteAdmin = async (id_table_admin) => {
        try{
            await axios.delete(`http://localhost:3010/admin/delete/${id_table_admin}`)
        } catch (error){
            alert(error)
        }
    }

    return (
        <div className="animated fadeIn">
            <a href="/admin/form">
                <button type="button" className="btn btn-primary fa fa-plus" > Tambah</button>
            </a>
                <div className="orders">
                    <div className="row">
                        <div className="col-xl-7">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="box-title">Akun Admin </h4>
                                </div>
                                <div className="card-body--">
                                    <div className="table-stats order-table ov-h">
                                        <table className="table ">
                                            <thead>
                                                <tr>
                                                    <th className="serial">No</th>
                                                    <th>Email/Username</th>
                                                    <th>Password</th>
                                                    <th className="th-o">Option</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {admin.map((admin, index) => (
                                                <tr key={admin.id_table_admin}>
                                                    <td className="serial"><span className="id-column">{index + 1}</span></td>
                                                    <td> <span className="name-column">{admin.admin_email}</span></td>
                                                    <td> <span className="name-column">{admin.password}</span> </td>
                                                    <td>
                                                        <a href={`/admin/edit/${admin.id_table_admin}`}/><span className="badge badge-complete">Edit</span>
                                                            <a href={`/admin`} onClick={() => deleteAdmin(admin.id_table_admin)}><span className="badge badge-danger">Delete</span></a>
                                                    </td>
                                                </tr>
))}   
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
        </div>
    )
}

export default SATambahAdmin;