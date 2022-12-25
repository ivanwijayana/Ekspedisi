import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function AdminEditSentran() {
    const [idbarang, setIdBarang] = useState('');
    const [idcabangasal, setIdCabangAsal] = useState('');
    const [namacabangasal, setNamaCabangAsal] = useState('');
    const [idadmin, setIdAdmin] = useState('');
    const [namaadmin, setNamaAdmin] = useState('');
    const [idcabangpenerima, setIdCabangPenerima] = useState('');
    const [namacabangpenerima, setNamaCabangPenerima] = useState('');
    const [waktupenerimaan, setWaktuPenerimaan] = useState('');
    const [resibarang, setResiBarang] = useState('');
    const [idekspedisi, setIdEkspedisi] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        try {
            axios.get(`http://localhost:3010/sentran/${id}`).then((res) => {
                setIdBarang(res.data.id_barang);
                setIdCabangAsal(res.data.id_cabang_asal);
                setNamaCabangAsal(res.data.nama_cabang_asal);
                setIdAdmin(res.data.id_admin);
                setNamaAdmin(res.data.nama_admin);
                setIdCabangPenerima(res.data.id_cabang_penerima);
                setNamaCabangPenerima(res.data.nama_cabang_penerima);
                setWaktuPenerimaan(res.data.createdAt);
                setResiBarang(res.data.resibarang);
                setIdEkspedisi(res.data.id_ekspedisi);
            });
        } catch (error) {
            alert(error)
        }
    }, [id]);

    function UpdateSentran(e) {
        e.preventDefault();
        axios.put(`http://localhost:3010/sentran/${id}`, {
            id_barang: idbarang,
            id_cabang_asal: idcabangasal,
            nama_cabang_asal: namacabangasal,
            id_admin: idadmin,
            nama_admin: namaadmin,
            id_cabang_penerima: idcabangpenerima,
            nama_cabang_penerima: namacabangpenerima,
            resi_barang: resibarang,
            id_ekspedisi: idekspedisi
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            console.log(res);
            navigate("/sentran");
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
                        <form class="form-horizontal" onSubmit={UpdateSentran}>
                            <div class="row form-group">
                                <div class="col col-md-3"><label for="text-input" class=" form-control-label">ID Barang</label></div>
                                <div class="col-12 col-md-9">
                                    <input type="number" placeholder="Tuliskan ID Barang" class="form-control" onChange={(e) => setIdBarang(e.target.value)} value={idbarang} />
                                </div>
                            </div>
                            <div class="row form-group">
                                <div class="col col-md-3"><label for="text-input" class=" form-control-label">ID Cabang Asal</label></div>
                                <div class="col-12 col-md-9">
                                    <input type="number" placeholder="Tuliskan ID Cabang Asal" class="form-control" onChange={(e) => setIdCabangAsal(e.target.value)} value={idcabangasal} />
                                </div>
                            </div>
                            <div class="row form-group">
                                <div class="col col-md-3"><label for="text-input" class=" form-control-label">Nama Cabang Asal</label></div>
                                <div class="col-12 col-md-9">
                                    <input type="text" placeholder="Tuliskan Nama Cabang" class="form-control" onChange={(e) => setNamaCabangAsal(e.target.value)} value={namacabangasal} />
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
                                <div class="col col-md-3"><label for="text-input" class=" form-control-label">ID Cabang Tujuan</label></div>
                                <div class="col-12 col-md-9">
                                    <input type="number" placeholder="Tuliskan ID Cabang Tujuan" class="form-control" onChange={(e) => setIdCabangPenerima(e.target.value)} value={idcabangpenerima} />
                                </div>
                            </div>
                            <div class="row form-group">
                                <div class="col col-md-3"><label for="text-input" class=" form-control-label">Nama Cabang Tujuan</label></div>
                                <div class="col-12 col-md-9">
                                    <input type="text" placeholder="Tuliskan Nama Cabang Tujuan" class="form-control" onChange={(e) => setNamaCabangPenerima(e.target.value)} value={namacabangpenerima} />
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
                                    <input type="number" placeholder="Tuliskan Resi" class="form-control" onChange={(e) => setResiBarang(e.target.value)} value={resibarang} />
                                </div>
                            </div>
                            <div class="row form-group">
                                <div class="col col-md-3"><label for="text-input" class=" form-control-label">ID Ekspedisi</label></div>
                                <div class="col-12 col-md-9">
                                    <input type="number" placeholder="Tuliskan ID Ekspedisi" class="form-control" onChange={(e) => setIdEkspedisi(e.target.value)} value={idekspedisi} />
                                </div>
                            </div>
                            <div class="card-footer">
                                <button onClick={() => {window.location.href="/sentran"}} type="submit" class="btn btn-primary btn-sm">
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

export default AdminEditSentran;