import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./Login";
import LoginUser from "./LoginUser";
import SAFormCabang from "./superadmin/SAFormCabang";
import SAEditCabang from "./superadmin/SAEditCabang";
import SACabang from "./SACabang";
import AdminRecexp from "./AdminRecexp";
import AdminRecuser from "./AdminRecuser";
import AdminFormRecexp from "./admin/AdminFormRecexp";
import AdminFormRecuser from "./admin/AdminFormRecuser";
import SAKaryawan from "./SAKaryawan";
import SAFormKaryawan from "./superadmin/SAFormKaryawan";
import SAEditKaryawan from "./superadmin/SAEditKaryawan";
import SATambahKaryawan from "./superadmin/SATambahKaryawan";
import SAFormAdmin from "./superadmin/SAFormAdmin";
import SAEditAdmin from "./superadmin/SAEditAdmin";
import SAAdmin from "./SAAdmin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/login-user' element={<LoginUser />} />
        <Route path='/login-superadmin' element={<SACabang />} />
        <Route path='/login-admin' element={<AdminRecexp />} />

        <Route path='/cabang' element={<SACabang />} />
        <Route path='/cabang/delete/:id' element={<SACabang />} />
        <Route path='/cabang/edit/:id' element={<SAEditCabang />} />
        <Route path='/cabang/form' element={<SAFormCabang />} />

        <Route path='/karyawan' element={<SAKaryawan/>} />
        <Route path='/karyawan' element={<SATambahKaryawan/>} />
        <Route path='/karyawan/delete/:id' element={<SAKaryawan />} />
        <Route path='/karyawan/edit/:id' element={<SAEditKaryawan />} />
        <Route path='/karyawan/form' element={<SAFormKaryawan />} />

        <Route path='/recexp' element={<AdminRecexp />} />
        <Route path='/recexp/form' element={<AdminFormRecexp />} />
        <Route path='/recuser' element={<AdminRecuser />} />
        <Route path='/recuser/form' element={<AdminFormRecuser />} />

        <Route path='/admin' element={<SAAdmin />} />
        <Route path='/admin/delete/:id' element={<SAAdmin />} />
        <Route path='/admin/edit/:id' element={<SAEditAdmin />} />
        <Route path='/admin/form' element={<SAFormAdmin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
