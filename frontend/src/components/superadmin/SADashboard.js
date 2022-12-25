import React, { useState, useEffect } from "react";
import axios from "axios";
import SideSuper from "../sidebar/SideSuper";
import SuperHeader from "../header/SuperHeader";

function SADashboard() {
    const [cabang, setCabang] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3010/cabang')
            .then(res => {
                setCabang(res.data);
            }).catch(err => {
                console.log(err);
            })
    }, []);

    const [karyawan, setKaryawan] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3010/karyawan')
            .then(res => {
                setKaryawan(res.data);
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
                <SideSuper />
            </div>
            <div className="content" style={{ marginRight: '-15%' }}>
                <div className="orders">
                    <div className="row">
                        <div className="col-xl-7">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="box-title">Data Cabang </h4>
                                </div>
                                <div className="card-body--">
                                    <div className="table-stats order-table ov-h">
                                        <table className="table ">
                                            <thead>
                                                <tr>
                                                    <th className="serial">No</th>
                                                    <th>ID Cabang</th>
                                                    <th>Name</th>
                                                    <th>Lokasi</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cabang.map((cabang, index) => (
                                                    <tr key={cabang.id_table_cabang}>
                                                        <td className="serial"><span className="id-column">{index + 1}</span></td>
                                                        <td> <span className="name-column">{cabang.id_cabang}</span></td>
                                                        <td> <span className="name-column">{cabang.nama_cabang}</span> </td>
                                                        <td> <span className="name-column">{cabang.lokasi}</span> </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

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
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {karyawan.map((karyawan, index) => (
                                                    <tr key={karyawan.id_table_karyawan}>
                                                        <td className="serial"><span className="id-column">{index + 1}</span></td>
                                                        <td> <span className="name-column">{karyawan.id_karyawan}</span></td>
                                                        <td> <span className="name-column">{karyawan.nama_karyawan}</span> </td>
                                                        <td> <span className="name-column">{karyawan.cabang_karyawan}</span> </td>
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
        </div>
    )
}

export default SADashboard;