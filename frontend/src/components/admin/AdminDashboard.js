import React, { useState, useEffect } from "react";
import axios from "axios";
import SideAdmin from "../sidebar/SideAdmin";
import SuperHeader from "../header/SuperHeader";

function AdminDashboard() {
    const [recexp, setRecexp] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3010/recexp')
            .then(res => {
                setRecexp(res.data);
            }).catch(err => {
                console.log(err);
            })
    }, []);

    const [recuser, setRecuser] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3010/recuser')
            .then(res => {
                setRecuser(res.data);
            }).catch(err => {
                console.log(err);
            })
    }, []);

    const [senrec, setSenrec] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3010/senrec')
            .then(res => {
                setSenrec(res.data);
            }).catch(err => {
                console.log(err);
            })
    }, []);

    const [sentran, setSentran] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3010/sentran')
            .then(res => {
                setSentran(res.data);
            }).catch(err => {
                console.log(err);
            })
    }, []);

    const containerStyles = {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '50px'
    };

    return (
        <div style={containerStyles}>
            <SuperHeader />
        <div className="left-panel" style={{ width: '5%' }}>
            <SideAdmin />
        </div>
        <div class="orders">
            <div class="row">
                <div class="col-xl-10">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="box-title">Penerimaan Ekspedisi</h4>
                        </div>
                        <div class="card-body--">
                            <div class="table-stats order-table ov-h">
                                <table class="table ">
                                    <thead>
                                        <tr>
                                            <th class="serial">#</th>
                                            <th>ID Barang</th>
                                            <th>Nama Cabang Pengirim</th>
                                            <th>ID Admin</th>
                                            <th>Nama Admin</th>
                                            <th>Waktu Penerimaan</th>
                                            <th>Resi</th>
                                            <th>ID Ekspedisi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {recexp.map((recexp, index) => (
                                            <tr key={recexp.id_rec_exp}>
                                                <td class="serial"><span class="id-column">{index + 1}</span></td>
                                                <td> <span class="name-column">{recexp.id_barang}</span></td>
                                                <td> <span class="name-column">{recexp.nama_cabang_sebelum}</span></td>
                                                <td> <span class="name-column">{recexp.id_admin}</span></td>
                                                <td> <span class="name-column">{recexp.nama_admin}</span> </td>
                                                <td> <span class="name-column">{recexp.createdAt}</span> </td>
                                                <td> <span class="name-column">{recexp.resi}</span> </td>
                                                <td> <span class="name-column">{recexp.id_ekspedisi}</span> </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body">
                            <h4 className="box-title">Penerimaan dari User</h4>
                        </div>
                        <div className="card-body--">
                            <div className="table-stats order-table ov-h">
                                <table className="table ">
                                    <thead>
                                        <tr>
                                            <th className="serial">#</th>
                                            <th>ID Barang</th>
                                            <th>Nama Barang</th>
                                            <th>Nama Cabang Pengirim</th>
                                            <th>Nama Pengirim</th>
                                            <th>Nama Penerima</th>
                                            <th>Kota</th>
                                            <th>Alamat</th>
                                            <th>Waktu Penerimaan</th>
                                            <th>Resi Barang</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {recuser.map((recuser, index) => (
                                            <tr key={recuser.id_rec_user}>
                                                <td className="serial"><span className="id-column">{index + 1}</span></td>
                                                <td> <span className="name-column">{recuser.id_barang}</span></td>
                                                <td> <span className="name-column">{recuser.nama_barang}</span></td>
                                                <td> <span className="name-column">{recuser.nama_cabang_asal}</span></td>
                                                <td> <span className="name-column">{recuser.nama_pengirim}</span></td>
                                                <td> <span className="name-column">{recuser.nama_penerima}</span> </td>
                                                <td> <span className="name-column">{recuser.kota}</span></td>
                                                <td> <span className="name-column">{recuser.alamat}</span></td>
                                                <td> <span className="name-column">{recuser.createdAt}</span> </td>
                                                <td> <span className="name-column">{recuser.resi_barang}</span> </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

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
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

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

export default AdminDashboard;