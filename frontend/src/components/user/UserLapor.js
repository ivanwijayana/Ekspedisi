import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UserLapor(){
    const [resi, setResi] = useState('');
    const [bukti, setBukti] = useState('');
    const navigate = useNavigate();

    const saveReport = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3010/report', {
            resi: resi,
            bukti: bukti
        });
        navigate("/check");
    }

    return(
        <div className="content">
            <div className="animated fadeIn">
                <div className="row">
                    <div className="col-lg-10">
                        <div className="card">
                            <form className="form-horizontal" onSubmit={saveReport}>
                                <div className="card-body card-block">
                                    <div className="row form-group">
                                        <div className="col-12 col-md-9">
                                            <input type="text" placeholder="resi" className="form-control" onChange={(e) => setResi(e.target.value)} value={resi}/>
                                        </div>
                                    </div>
                                    <div className="row form-group">
                                        <div className="col-12 col-md-9">
                                            <input type="text" placeholder="bukti" className="form-control" onChange={(e) => setBukti(e.target.value)} value={bukti}/>
                                        </div>
                                    </div>
                                <div className="bus">
                                    <button  onClick={() => {window.location.href="/check"}} type="submit" className="btn btn-primary">Simpan</button>
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserLapor;