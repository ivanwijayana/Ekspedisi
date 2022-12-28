import React from "react";

function SideUser(){
    return(
        <aside id="left-panel" className="left-panel">
        <nav className="navbar navbar-expand-sm navbar-default">
            <div id="main-menu" className="main-menu collapse navbar-collapse">
                <ul className="nav navbar-nav">
                    <li className="active">
                        <a href="/check"><i className="menu-icon fa fa-check-square-o"></i>Checking </a>
                    </li>
                    <li className="active">
                        <a href="/lapor"><i className="menu-icon fa fa-exclamation-circle"></i>Lapor</a>
                    </li>
                </ul>
            </div>
        </nav>
    </aside>
    )
}

export default SideUser;