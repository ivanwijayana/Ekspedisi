import React, { useState, useEffect } from "react";
import axios from "axios";

function SATambahUser(){
    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3010/user')
            .then(res => {
                setUser(res.data);
            }).catch(err => {
                console.log(err);
            })
    }, []);

    const deleteUser = async (id_table_user) => {
        try{
            await axios.delete(`http://localhost:3010/user/delete/${id_table_user}`)
        } catch (error){
            alert(error)
        }
    }

    return(
        <div className="orders">
            <a href="/user/form">
            <button type="button" class="btn btn-primary fa fa-plus" > Tambah</button>
                </a>
                    <div className="row" style={{marginTop:'8px'}}>
                        <div className="col-xl-7">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="box-title">Data User </h4>
                                </div>
                                <div className="card-body--">
                                    <div className="table-stats order-table ov-h">
                                       <table className="table ">
                                            <thead>
                                                <tr>
                                                    <th className="serial">No</th>
                                                    <th>ID User</th>
                                                    <th>Username</th>
                                                    <th>Password</th> 
                                                    <th className="th-o">Option</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                    {user.map((user, index) => (
                                                        <tr key={user.user_id}>
                                                        <td className="serial"><span className="id-column">{index + 1}</span></td>
                                                        <td> <span className="name-column">{user.user_id}</span></td>
                                                        <td> <span className="name-column">{user.username}</span> </td>
                                                        <td> <span className="name-column">{user.password}</span> </td>
                                                       
                                                        <td>
                                                        <a href={`/user/edit/${user.id_table_user}`}>
                                                        <span onClick={() => {window.location.href="/user"}} className="badge badge-complete">Edit</span>
                                                        </a>
                                                        < a onClick={() => deleteUser(user.id_table_user)}>
                                                            <span onClick={() => {window.location.href="/user"}} className="badge badge-danger">Delete</span>
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

export default SATambahUser;
