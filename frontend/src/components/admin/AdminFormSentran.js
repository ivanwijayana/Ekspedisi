import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminFormSentran() {
    const [idbarang, setIdBarang] = useState('');
    const [idcabangasal, setIdCabangAsal] = useState('');
    const [namacabangasal, setNamaCabangAsal] = useState('');
    const [idadmin, setIdAdmin] = useState('');
    const [namaadmin, setNamaAdmin] = useState('');
    const [idcabangtujuan, setIdCabangTujuan] = useState('');
    const [namacabangtujuan, setNamaCabangTujuan] = useState('');
    const [resibarang, setResiBarang] = useState('');
    const [idekspedisi, setIdEkspedisi] = useState('');
    const navigate = useNavigate();

    const saveSentran = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3010/sentran', {
            id_barang: idbarang,
            id_cabang_asal: idcabangasal,
            nama_cabang_asal: namacabangasal,
            id_admin: idadmin,
            nama_admin: namaadmin,
            id_cabang_penerima: idcabangtujuan,
            nama_cabang_penerima: namacabangtujuan,
            resi_barang: resibarang,
            id_ekspedisi: idekspedisi
        });
        navigate("/sentran");
    }


    return (
        <div class="animated fadeIn">
            <div class="col-lg-8">
                <div class="card">
                    <div class="card-header">
                        Penerimaan Barang dari <strong>User</strong>
                    </div>
                    <div class="card-body card-block">
                        <form class="form-horizontal" onSubmit={saveSentran}>
                            <div class="row form-group">
                                <div class="col col-md-3"><label for="text-input" class=" form-control-label">ID Barang</label></div>
                                <div class="col-12 col-md-9">
                                    <input type="number" placeholder="Tuliskan ID Barang" class="form-control" onChange={(e) => setIdBarang(e.target.value)} value={idbarang}/>
                                </div>
                            </div>
                            <div class="row form-group">
                                <div class="col col-md-3"><label for="text-input" class=" form-control-label">ID Cabang Asal</label></div>
                                <div class="col-12 col-md-9">
                                    <input type="number" placeholder="Tuliskan ID Cabang Asal" class="form-control" onChange={(e) => setIdCabangAsal(e.target.value)} value={idcabangasal}/>
                                </div>
                            </div>
                            <div class="row form-group">
                                <div class="col col-md-3"><label for="text-input" class=" form-control-label">Nama Cabang Asal</label></div>
                                <div class="col-12 col-md-9">
                                    <input type="text" placeholder="Tuliskan Nama Cabang" class="form-control" onChange={(e) => setNamaCabangAsal(e.target.value)} value={namacabangasal}/>
                                </div>
                            </div>
                            <div class="row form-group">
                                <div class="col col-md-3"><label for="text-input" class=" form-control-label">ID Admin</label></div>
                                <div class="col-12 col-md-9">
                                    <input type="number" placeholder="Tuliskan ID Admin" class="form-control" onChange={(e) => setIdAdmin(e.target.value)} value={idadmin}/>
                                </div>
                            </div>
                            <div class="row form-group">
                                <div class="col col-md-3"><label for="text-input" class=" form-control-label">Nama Admin</label></div>
                                <div class="col-12 col-md-9">
                                    <input type="text"placeholder="Tuliskan Nama Admin" class="form-control" onChange={(e) => setNamaAdmin(e.target.value)} value={namaadmin}/>
                                </div>
                            </div>
                            <div class="row form-group">
                                <div class="col col-md-3"><label for="text-input" class=" form-control-label">ID Cabang Tujuan</label></div>
                                <div class="col-12 col-md-9">
                                    <input type="number" placeholder="Tuliskan ID Cabang Tujuan" class="form-control" onChange={(e) => setIdCabangTujuan(e.target.value)} value={idcabangtujuan}/>
                                </div>
                            </div>
                            <div class="row form-group">
                                <div class="col col-md-3"><label for="text-input" class=" form-control-label">Nama Cabang Tujuan</label></div>
                                <div class="col-12 col-md-9">
                                    <input type="text" placeholder="Tuliskan Nama Cabang Tujuan" class="form-control" onChange={(e) => setNamaCabangTujuan(e.target.value)} value={namacabangtujuan}/>
                                </div>
                            </div>
                            <div class="row form-group">
                                <div class="col col-md-3"><label for="text-input" class=" form-control-label">Resi Barang</label></div>
                                <div class="col-12 col-md-9">
                                    <input type="number" placeholder="Tuliskan Resi" class="form-control" onChange={(e) => setResiBarang(e.target.value)} value={resibarang}/>
                                </div>
                            </div>
                            <div class="row form-group">
                                <div class="col col-md-3"><label for="text-input" class=" form-control-label">ID Ekspedisi</label></div>
                                <div class="col-12 col-md-9">
                                    <input type="number" placeholder="Tuliskan ID Ekspedisi" class="form-control" onChange={(e) => setIdEkspedisi(e.target.value)} value={idekspedisi}/>
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

export default AdminFormSentran;

