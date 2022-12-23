import React, { useState, useEffect } from "react";
import axios from "axios";

function AdminTabelSentran() {
    const [sentran, setSentran] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3010/sentran')
            .then(res => {
                setSentran(res.data);
            }).catch(err => {
                console.log(err);
            })
    }, []);

    const deleteSentran = async (id_sen_tran) => {
        try {
            await axios.delete(`http://localhost:3010/sentran/delete/${id_sen_tran}`)
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
                            <h4 class="box-title">Pengiriman ke Transit </h4>
                        </div>
                        <div class="card-body--">
                            <div class="table-stats order-table ov-h">
                                <table class="table ">
                                    <thead>
                                        <tr>
                                            <th class="serial">#</th>
                                            <th>ID Barang</th>
                                            <th>Nama Admin</th>
                                            <th>Resi</th>
                                            <th>Cabang Tujuan</th>
                                            <th>Waktu</th>
                                            <th>Option</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {sentran.map((sentran, index) => (
                                            <tr key={sentran.id_sen_tran}>
                                                <td class="serial"><span class="id-column">{index + 1}</span></td>
                                                <td> <span class="name-column">{sentran.id_barang}</span></td>
                                                <td> <span class="name-column">{sentran.nama_admin}</span></td>
                                                <td> <span class="name-column">{sentran.resi_barang}</span> </td>
                                                <td> <span class="name-column">{sentran.nama_cabang_penerima}</span> </td>
                                                <td> <span class="name-column">{sentran.createdAt}</span> </td>
                                                <td>
                                                    <a href={`/sentran/edit/${sentran.id_sen_tran}`}>
                                                        <span className="badge badge-complete">Edit</span>
                                                    </a>
                                                    <a href={`/sentran`}
                                                        onClick={() => deleteSentran(sentran.id_sen_tran)}>
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

export default AdminTabelSentran;