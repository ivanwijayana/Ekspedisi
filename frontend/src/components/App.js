import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./Login";
import LoginUser from "./LoginUser";
import SAFormCabang from "./superadmin/SAFormCabang";
import SAEditCabang from "./superadmin/SAEditCabang";
import SACabang from "./SACabang";
import SAKaryawan from "./SAKaryawan";

//user
import SAUser from "./SAUser";
import SATambahUser from "./superadmin/SATambahUser";
import SAFormUser from "./superadmin/SAFormUser";
import SAEditUser from "./superadmin/SAEditUser";

//karyawan
import SAFormKaryawan from "./superadmin/SAFormKaryawan";
import SAFormAdmin from "./superadmin/SAFormAdmin";
  //Edit
import SAEditCabang from "./superadmin/SAEditCabang";
import SAEditKaryawan from "./superadmin/SAEditKaryawan";
import SATambahKaryawan from "./superadmin/SATambahKaryawan";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/cabang' element={<SACabang />} />
        <Route path='/cabang/delete/:id' element={<SACabang />} />
        <Route path='/cabang/edit/:id' element={<SAEditCabang />} />
        <Route path='/cabang/form' element={<SAFormCabang />} />

        <Route path='/karyawan' element={<SAKaryawan/>} />
        <Route path='/karyawan/delete/:id' element={<SAKaryawan />} />
        <Route path='/karyawan/edit/:id' element={<SAEditKaryawan />} />
        <Route path='/karyawan/form' element={<SAFormKaryawan />} />


        <Route path='/user' element={<SATambahUser/>} />
        <Route path='/user' element={<SAUser/>} />
        <Route path='/user/form' element={<SAFormUser/>} />
        <Route path='/user/edit/:id' element={<SAEditUser />} />
        <Route path='/user/delete/:id' element={<SAEditUser />} />

        <Route path='/login-superadmin' element={<SACabang />} />
        <Route path='/login-admin' element={<AdminRecexp />} />

        <Route path='/user' element={<SAUser />} />
        <Route path='/user' element={<SATambahUser/>} />
        <Route path='/user/form' element={<SAFormUser/>} />
        <Route path='/user/delete/:id' element={<SAUser />} />
        <Route path='/user/edit/:id' element={<SAEditUser />} />

        <Route path='/sadmin' element={<SAAdmin />} />
        <Route path='/sadmin' element={<SATambahAdmin />} />
        <Route path='/sadmin/form' element={<SAFormAdmin />} />
        <Route path='/sadmin/delete/:id' element={<SAAdmin />} />
        <Route path='/sadmin/edit/:id' element={<SAEditAdmin />} />

>>>>>>> c8165b9 (tambah auto refresh)
        <Route path='/admin' element={<AdminRecexp />} />
        <Route path='/recexp' element={<AdminRecexp />} />
        <Route path='/recexp/form' element={<AdminFormRecexp />} />
        <Route path='/recuser' element={<AdminRecuser />} />
        <Route path='/recuser/delete/:id' element={<AdminRecuser />} />
        <Route path='/recuser/edit/:id' element={<AdminEditRecuser />} />
        <Route path='/recuser/form' element={<AdminFormRecuser />} />

        <Route path='/admin' element={<SAAdmin />} />
        <Route path='/admin/delete/:id' element={<SAAdmin />} />
        <Route path='/admin/edit/:id' element={<SAEditAdmin />} />
        <Route path='/admin/form' element={<SAFormAdmin />} />

        <Route path='/sentran' element={<AdminSentran />} />
        <Route path='/sentran/delete/:id' element={<AdminSentran />} />
        <Route path='/sentran/edit/:id' element={<AdminEditSentran />} />
        <Route path='/sentran/form' element={<AdminFormSentran />} />

        <Route path='/senrec' element={<AdminSenrec />} />
        <Route path='/senrec/delete/:id' element={<AdminSenrec />} />
        <Route path='/senrec/edit/:id' element={<AdminEditSenrec />} />
        <Route path='/senrec/form' element={<AdminFormSenrec />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
