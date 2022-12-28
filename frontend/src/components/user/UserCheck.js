import React, { useState, useEffect } from "react";
import axios from "axios";

function UserCheck(){
    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3010/report')
            .then(res => {
                setUser(res.data);
            }).catch(err => {
                console.log(err);
            })
    }, []);

    return(
        <div className="orders">
                    <div className="row">
                        <div className="col-xl-10">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="box-title">Data Paket </h4>
                                </div>
                                <div className="card-body--">
                                    <div className="table-stats order-table ov-h">
                                        <table className="table ">
                                            <thead>
                                                <tr>
                                                    <th className="serial">No</th>
                                                    <th>Resi Paket</th>
                                                    <th>Bukti</th>
                                                    <th className="th-o">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {user.map((user, index) => (
                                                <tr key={user.id}>
                                                    <td className="serial">{index + 1}</td>
                                                    <td>{user.resi}</td>
                                                    <td><span>{user.bukti}</span></td>
                                                    <td className="th-o"><span>Selesai</span></td>
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
    )
}

export default UserCheck;