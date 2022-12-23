import React, { useState, useEffect } from "react";
import axios from "axios";

function SATambahAdmin(){
    const [admin, setAdmin] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3010/sadmin')
            .then(res => {
                setAdmin(res.data);
            }).catch(err => {
                console.log(err);
            })
    }, []);

    const deleteAdmin = async (admin_id) => {
        try{
            await axios.delete(`http://localhost:3010/sadmin/delete/${admin_id}`)
        } catch (error){
            alert(error)
        }
    }

    return(
        <div className="orders">
            <a href="/sadmin/form">
                    <button type="button" class="btn btn-primary fa fa-plus" > Tambah</button>
                </a>
                    <div className="row" style={{marginTop:'8px'}}>
                        <div className="col-xl-7">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="box-title">Data Admin </h4>
                                </div>
                                <div className="card-body--">
                                    <div className="table-stats order-table ov-h">
                                       <table className="table ">
                                            <thead>
                                                <tr>
                                                    <th className="serial">No</th>
                                                    <th>ID Admin</th>
                                                    <th>Email Admin</th>
                                                    <th>Password</th> 
                                                    <th className="th-o">Option</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                    {admin.map((admin, index) => (
                                                        <tr key={admin.admin_id}>
                                                        <td className="serial"><span className="id-column">{index + 1}</span></td>
                                                        <td> <span className="name-column">{admin.admin_id}</span></td>
                                                        <td> <span className="name-column">{admin.admin_email}</span> </td>
                                                        <td> <span className="name-column">{admin.password}</span> </td>
                                                       
                                                        <td>
                                                        <a href={`/sadmin/edit/${admin.admin_id}`}>
                                                        <span className="badge badge-complete">Edit</span>
                                                        </a>
                                                        <a href={`/sadmin/delete/${admin.admin_id}`} 
                                                        onClick={() => deleteAdmin(admin.admin_id)}>
                                                            <span className="badge badge-danger">Delete</span>
                                                        </a>
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
    );
}

export default SATambahAdmin;
