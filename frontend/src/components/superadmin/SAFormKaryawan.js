import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SAFormKaryawan(){
    const [nama, setNama] = useState('');
    const [lokasi, setLokasi] = useState('');
    const [id, setId] = useState('');
    const navigate = useNavigate();

    const saveKaryawan = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3010/karyawan', {
            id_karyawan: id,
            nama_karyawan: nama,
            cabang_karyawan: lokasi
        });
        navigate("/karyawan");
    }


    return(
        <div className="col-lg-6" style={{margin:'10px 10px'}}>
            <a href="/karyawan">
                    <button type="button" class="btn btn-primary fa fa-arrow-circle-left" >  Kembali</button>
                </a>
                    <form className="form-horizontal" onSubmit={saveKaryawan}>
                    <div className="card" style={{marginTop:'10px'}}>
                        <div className="card-header"><strong>Form Karyawan</strong></div>
                        <div className="card-body card-block">
                            <div className="form-group">
                                <label for="company" className=" form-control-label">
                                    ID Karyawan
                                </label>
                            <input type="text" id="id_cabang" name="id_cabang" placeholder="Enter Karyawan ID" className="form-control" onChange={(e) => setId(e.target.value)} value={id}/>                                
                            
                            <label for="vat" className=" form-control-label">
                                Nama Karyawan
                            </label>
                            <input type="text" id="nama_cabang" name="nama_cabang" placeholder="Enter Karyawan Name" className="form-control" onChange={(e) => setNama(e.target.value)} value={nama}/>
                            
                            <label for="street" className=" form-control-label">
                                Lokasi Cabang
                            </label>
                            <input type="text" id="lokasi" name="lokasi" placeholder="Enter Cabang Karyawan" className="form-control" onChange={(e) => setLokasi(e.target.value)} value={lokasi}/>
                            </div>
                        </div>
                        <div className="but">
                            <button onClick={() => {window.location.href="/karyawan"}} type="submit" className="btn btn-primary" style={{margin:'10px 10px'}}>Simpan</button>
                        </div>
                    </div>
                    </form>
            </div>
    )
}

export default SAFormKaryawan;
