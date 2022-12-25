<<<<<<< HEAD
import React from "react";

function SideSuper(){
    return(
        <aside id="left-panel" class="left-panel">
        <nav className="navbar navbar-expand-sm navbar-default">
            <div id="main-menu" className="main-menu collapse navbar-collapse">
                <ul className="nav navbar-nav">
                    <li className="active">
                        <a href="sa-dashboard.ejs"><i className="menu-icon fa fa-laptop"></i>Dashboard </a>
                    </li>
                    <li className="active">
                        <a href="/cabang"><i className="menu-icon fa fa-tasks"></i>Tambah Cabang</a>
                    </li>
                    <li className="active">
                        <a href="/karyawan"><i className="menu-icon fa fa-users"></i>Tambah Karyawan</a>
                    </li>
                    <li className="menu-item-has-children active dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-th"></i>Tambah Akun</a>
                        <ul className="sub-menu children dropdown-menu">
                            <li><i className="menu-icon fa fa-user-circle"></i><a href="/sadmin">Admin</a></li>
                            <li><i className="menu-icon fa fa-users"></i><a href="/user">User</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    </aside>
    )
}

=======
import React from "react";

function SideSuper(){
    return(
        <aside id="left-panel" className="left-panel">
        <nav className="navbar navbar-expand-sm navbar-default">
            <div id="main-menu" className="main-menu collapse navbar-collapse">
                <ul className="nav navbar-nav">
                    <li className="active">
                        <a href="/sa-dashboard"><i className="menu-icon fa fa-laptop"></i>Dashboard </a>
                    </li>
                    <li className="active">
                        <a href="/cabang"><i className="menu-icon fa fa-tasks"></i>Manajemen Cabang</a>
                    </li>
                    <li className="active">
                        <a href="/karyawan"><i className="menu-icon fa fa-users"></i>Manajemen Karyawan</a>
                    </li>
                    <li className="menu-item-has-children active dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-th"></i>Manajemen Akun</a>
                        <ul className="sub-menu children dropdown-menu">
                            <li><i className="menu-icon fa fa-user-circle"></i><a href="/admin">Admin</a></li>
                            <li><i className="menu-icon fa fa-users"></i><a href="/user">user</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    </aside>
    )
}

>>>>>>> 3c6f8d7e7e8edd209141df9a3026932c769eade2
export default SideSuper;