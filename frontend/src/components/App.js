import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./Login";
import LoginUser from "./LoginUser";

//Super Admin
  //Form
import SAFormCabang from "./superadmin/SAFormCabang";
import SAFormKaryawan from "./superadmin/SAFormKaryawan";
import SAFormAdmin from "./superadmin/SAFormAdmin";
  //Edit
import SAEditCabang from "./superadmin/SAEditCabang";
import SAEditKaryawan from "./superadmin/SAEditKaryawan";
import SAEditAdmin from "./superadmin/SAEditAdmin";
  //Main Page
import SAAdmin from "./SAAdmin";
import SAKaryawan from "./SAKaryawan";
import SACabang from "./SACabang";

//Admin
  //Form
import AdminFormRecexp from "./admin/AdminFormRecexp";
import AdminFormRecuser from "./admin/AdminFormRecuser";
import AdminFormSenrec from "./admin/AdminFormSenrec";
import AdminFormSentran from "./admin/AdminFormSentran";
  //Edit
import AdminEditRecexp from "./admin/AdminEditRecexp";
import AdminEditRecuser from "./admin/AdminEditRecuser";
import AdminEditSentran from "./admin/AdminEditSentran";
import AdminEditSenrec from "./admin/AdminEditSenrec";
  //Main Page
import AdminSenrec from "./AdminSenrec";
import AdminRecexp from "./AdminRecexp";
import AdminRecuser from "./AdminRecuser";
import AdminSentran from "./AdminSentran";

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
        <Route path='/karyawan/delete/:id' element={<SAKaryawan />} />
        <Route path='/karyawan/edit/:id' element={<SAEditKaryawan />} />
        <Route path='/karyawan/form' element={<SAFormKaryawan />} />

        <Route path='/recexp' element={<AdminRecexp />} />        
        <Route path='/recexp/delete/:id' element={<AdminRecexp />} />
        <Route path='/recexp/edit/:id' element={<AdminEditRecexp />} />
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
