import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from "./Home";
import Login from "./Login";
import LoginUser from "./LoginUser";

//Super Admin
<<<<<<< HEAD

// Form
=======
  //Form
>>>>>>> 3c6f8d7e7e8edd209141df9a3026932c769eade2
import SAFormCabang from "./superadmin/SAFormCabang";
import SAFormKaryawan from "./superadmin/SAFormKaryawan";
import SAFormAdmin from "./superadmin/SAFormAdmin";
import SAFormUser from "./superadmin/SAFormUser";
<<<<<<< HEAD
import AdminFormRecexp from "./admin/AdminFormRecexp";
import AdminFormRecuser from "./admin/AdminFormRecuser";
import AdminFormSenrec from "./admin/AdminFormSenrec";
import AdminFormSentran from "./admin/AdminFormSentran";


//Edit
import AdminEditRecexp from "./admin/AdminEditRecexp";
import AdminEditRecuser from "./admin/AdminEditRecuser";
import AdminEditSentran from "./admin/AdminEditSentran";
import AdminEditSenrec from "./admin/AdminEditSenrec";
=======
  //Edit
>>>>>>> 3c6f8d7e7e8edd209141df9a3026932c769eade2
import SAEditCabang from "./superadmin/SAEditCabang";
import SAEditKaryawan from "./superadmin/SAEditKaryawan";
import SAEditAdmin from "./superadmin/SAEditAdmin";
import SAEditUser from "./superadmin/SAEditUser";
<<<<<<< HEAD

//Main Page
import SAAdmin from "./SAAdmin";
import SAKaryawan from "./SAKaryawan";
import SACabang from "./SACabang";
import SAUser from "./SAUser";

//Admin


//Main Page
=======
  //Main Page
import SAAdmin from "./SAAdmin";
import SAKaryawan from "./SAKaryawan";
import SACabang from "./SACabang";
import SAUser from "./SAUser";
import SADashboard from "./superadmin/SADashboard";

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
>>>>>>> 3c6f8d7e7e8edd209141df9a3026932c769eade2
import AdminSenrec from "./AdminSenrec";
import AdminRecexp from "./AdminRecexp";
import AdminRecuser from "./AdminRecuser";
import AdminSentran from "./AdminSentran";
<<<<<<< HEAD
=======
import AdminDashboard from "./admin/AdminDashboard";
>>>>>>> 3c6f8d7e7e8edd209141df9a3026932c769eade2

function App() {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/login-user' element={<LoginUser />} />
        <Route path='/login-superadmin' element={<SACabang />} />
        <Route path='/login-admin' element={<AdminRecexp />} />

        <Route path='/user' element={<SAUser />} />
        <Route path='/user/form' element={<SAFormUser />} />
        <Route path='/user/edit/:id' element={<SAEditUser />} />
        <Route path='/user/delete/:id' element={<SAUser />} />
=======
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/login-user' element={<LoginUser />} />
        <Route path='/login-superadmin' element={<SADashboard />} />
        <Route path='/sa-dashboard' element={<SADashboard />} />
        <Route path='/login-admin' element={<AdminDashboard />} />
        <Route path='/admin-dashboard' element={<AdminDashboard />} />
>>>>>>> 3c6f8d7e7e8edd209141df9a3026932c769eade2

        <Route path='/cabang' element={<SACabang />} />
        <Route path='/cabang/delete/:id' element={<SACabang />} />
        <Route path='/cabang/edit/:id' element={<SAEditCabang />} />
        <Route path='/cabang/form' element={<SAFormCabang />} />

        <Route path='/user' element={<SAUser />} />
        <Route path='/user/delete/:id' element={<SAUser />} />
        <Route path='/user/edit/:id' element={<SAEditUser />} />
        <Route path='/user/form' element={<SAFormUser />} />

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

        <Route path='/sadmin' element={<SAAdmin />} />
        <Route path='/sadmin/delete/:id' element={<SAAdmin />} />
        <Route path='/sadmin/edit/:id' element={<SAEditAdmin />} />
        <Route path='/sadmin/form' element={<SAFormAdmin />} />

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