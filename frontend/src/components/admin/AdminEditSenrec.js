import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function AdminEditSenrec() {
    const [idbarang, setIdBarang] = useState('');
    const [idadmin, setIdAdmin] = useState('');
    const [namaadmin, setNamaAdmin] = useState('');
    const [alamat, setAlamat] = useState('');
    const [namapenerima, setNamaPenerima] = useState('');
    const [waktupenerimaan, setWaktuPenerimaan] = useState('');
    const [resi, setResi] = useState('');
    const [idpengiriman, setIdPengiriman] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        try {
            axios.get(`http://localhost:3010/senrec/${id}`).then((res) => {
                setIdBarang(res.data.id_barang);
                setIdAdmin(res.data.id_admin);
                setNamaAdmin(res.data.nama_admin);
                setNamaPenerima(res.data.nama_penerima);
                setAlamat(res.data.alamat);
                setWaktuPenerimaan(res.data.createdAt);
                setResi(res.data.resi);
                setIdPengiriman(res.data.id_pengiriman);
            });
        } catch (error) {
            alert(error)
        }
    }, [id]);

    function UpdateSenrec(e) {
        e.preventDefault();
        axios.put(`http://localhost:3010/senrec/${id}`, {
            id_barang: idbarang,
            id_admin: idadmin,
            nama_admin: namaadmin,
            nama_penerima: namapenerima,
            alamat: alamat,
            resi: resi,
            id_pengiriman: idpengiriman
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            console.log(res);
            navigate("/senrec");
        }).catch(err => {
            console.log(err);
        })
    }


    return (
        <div class="animated fadeIn">
            <div class="col-lg-8">
                <div class="card">
                    <div class="card-header">
                        Penerimaan Barang dari <strong>User</strong>
                    </div>
                    <div class="card-body card-block">
                        <form class="form-horizontal" onSubmit={UpdateSenrec}>
                            <div class="row form-group">
                                <div class="col col-md-3"><label for="text-input" class=" form-control-label">ID Barang</label></div>
                                <div class="col-12 col-md-9">
                                    <input type="number" placeholder="Tuliskan ID Barang" class="form-control" onChange={(e) => setIdBarang(e.target.value)} value={idbarang} />
                                </div>
                            </div>
                            <div class="row form-group">
                                <div class="col col-md-3"><label for="text-input" class=" form-control-label">ID Admin</label></div>
                                <div class="col-12 col-md-9">
                                    <input type="number" placeholder="Tuliskan ID Admin" class="form-control" onChange={(e) => setIdAdmin(e.target.value)} value={idadmin} />
                                </div>
                            </div>
                            <div class="row form-group">
                                <div class="col col-md-3"><label for="text-input" class=" form-control-label">Nama Admin</label></div>
                                <div class="col-12 col-md-9">
                                    <input type="text" placeholder="Tuliskan Nama Admin" class="form-control" onChange={(e) => setNamaAdmin(e.target.value)} value={namaadmin} />
                                </div>
                            </div>
                            <div class="row form-group">
                                <div class="col col-md-3"><label for="text-input" class=" form-control-label">Nama Penerima</label></div>
                                <div class="col-12 col-md-9">
                                    <input type="number" placeholder="Tuliskan Nama Penerima" class="form-control" onChange={(e) => setNamaPenerima(e.target.value)} value={namapenerima} />
                                </div>
                            </div>
                            <div class="row form-group">
                                <div class="col col-md-3"><label for="text-input" class=" form-control-label">Alamat</label></div>
                                <div class="col-12 col-md-9">
                                    <input type="text" placeholder="Tuliskan Alamat Penerima" class="form-control" onChange={(e) => setAlamat(e.target.value)} value={alamat} />
                                </div>
                            </div>
                            <div class="row form-group">
                                <div class="col col-md-3"><label for="text-input" class=" form-control-label">Waktu Penerimaan</label></div>
                                <div class="col-12 col-md-9">
                                    <input type="text" placeholder="Tuliskan Waktu Penerimaan" class="form-control" onChange={(e) => setWaktuPenerimaan(e.target.value)} value={waktupenerimaan} />
                                </div>
                            </div>
                            <div class="row form-group">
                                <div class="col col-md-3"><label for="text-input" class=" form-control-label">Resi Barang</label></div>
                                <div class="col-12 col-md-9">
                                    <input type="text" placeholder="Tuliskan Resi" class="form-control" onChange={(e) => setResi(e.target.value)} value={resi} />
                                </div>
                            </div>
                            <div class="row form-group">
                                <div class="col col-md-3"><label for="text-input" class=" form-control-label">ID Pengiriman</label></div>
                                <div class="col-12 col-md-9">
                                    <input type="number" placeholder="Tuliskan ID Pengiriman" class="form-control" onChange={(e) => setIdPengiriman(e.target.value)} value={idpengiriman} />
                                </div>
                            </div>
                            <div class="card-footer">
                                <button type="submit" class="btn btn-primary btn-sm">
                                    <i class="fa fa-dot-circle-o"></i> Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminEditSenrec;

