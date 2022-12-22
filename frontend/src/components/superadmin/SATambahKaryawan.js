import React, { useState, useEffect } from "react";
import axios from "axios";

function SATambahKaryawan(){
    const [karyawan, setKaryawan] = useState([]);    

    useEffect(() => {
        axios.get('http://localhost:3010/karyawan')
            .then(res => {
                setKaryawan(res.data);
            }).catch(err => {
                console.log(err);
            })
    }, []);

    const deleteKaryawan = async (id_table_karyawan) => {
        try{
            await axios.delete(`http://localhost:3010/karyawan/delete/${id_table_karyawan}`)
        } catch (error){
            alert(error)
        }
    };

    return(
        <div className="orders">
            <a href="/karyawan/form">
                    <button type="button" class="btn btn-primary fa fa-plus" > Tambah</button>
                </a>
                    <div className="row" style={{marginTop:'8px'}}>
                        <div className="col-xl-7">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="box-title">Data Karyawan </h4>
                                </div>
                                <div className="card-body--">
                                    <div className="table-stats order-table ov-h">
                                       <table className="table ">
                                            <thead>
                                                <tr>
                                                    <th className="serial">No</th>
                                                    <th>ID Karyawan</th>
                                                    <th>Nama Karyawan</th>
                                                    <th>Cabang karyawan</th>
                                                    <th className="th-o">Option</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                    {karyawan.map((karyawan, index) => (
                                                        <tr key={karyawan.id_table_karyawan}>
                                                        <td className="serial"><span className="id-column">{index + 1}</span></td>
                                                        <td> <span className="name-column">{karyawan.id_karyawan}</span></td>
                                                        <td> <span className="name-column">{karyawan.nama_karyawan}</span> </td>
                                                        <td> <span className="name-column">{karyawan.cabang_karyawan}</span> </td>
                                                        <td>
                                                        <a href={`/karyawan/edit/${karyawan.id_table_karyawan}`}>
                                                        <span className="badge badge-complete">Edit</span>
                                                        </a>
                                                        <a href={`/karyawan/delete/${karyawan.id_table_karyawan}`} 
                                                        onClick={() => deleteKaryawan(karyawan.id_table_karyawan)}>
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

export default SATambahKaryawan;