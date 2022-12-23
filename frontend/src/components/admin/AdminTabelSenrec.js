import React, { useState, useEffect } from "react";
import axios from "axios";

function AdminTabelSenrec() {
    const [senrec, setSenrec] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3010/senrec')
            .then(res => {
                setSenrec(res.data);
            }).catch(err => {
                console.log(err);
            })
    }, []);

    const deleteSenrec = async (id_sen_rec) => {
        try {
            await axios.delete(`http://localhost:3010/senrec/delete/${id_sen_rec}`)
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div class="orders">
            <div class="row">
                <div class="col-xl-10">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="box-title">Pengiriman ke Penerima </h4>
                        </div>
                        <div class="card-body--">
                            <div class="table-stats order-table ov-h">
                                <table class="table ">
                                    <thead>
                                        <tr>
                                            <th class="serial">#</th>
                                            <th>Nama Admin</th>
                                            <th>Resi</th>
                                            <th>Nama Penerima</th>
                                            <th>Alamat</th>
                                            <th>Waktu</th>
                                            <th>Option</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {senrec.map((senrec, index) => (
                                            <tr key={senrec.id_sen_rec}>
                                                <td class="serial"><span class="id-column">{index + 1}</span></td>
                                                <td> <span class="name-column">{senrec.nama_admin}</span></td>
                                                <td> <span class="name-column">{senrec.resi}</span> </td>
                                                <td> <span class="name-column">{senrec.nama_penerima}</span> </td>
                                                <td> <span class="name-column">{senrec.alamat}</span> </td>
                                                <td> <span class="name-column">{senrec.createdAt}</span> </td>
                                                <td>
                                                    <a href={`/senrec/edit/${senrec.id_sen_rec}`}>
                                                        <span className="badge badge-complete">Edit</span>
                                                    </a>
                                                    <a href={`/senrec`}
                                                        onClick={() => deleteSenrec(senrec.id_sen_rec)}>
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
    )
}

export default AdminTabelSenrec;