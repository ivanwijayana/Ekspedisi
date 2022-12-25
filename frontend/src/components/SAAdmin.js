<<<<<<< HEAD
import React from "react";
import SideSuper from "./sidebar/SideSuper";
import SuperHeader from "./header/SuperHeader";
import SATambahAdmin from "./superadmin/SATambahAdmin";

function SAAdmin(){
    const containerStyles = {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '50px'
    };

    return(
        <div style={containerStyles}>
            <SuperHeader/>
            <div className="left-panel" style={{width:'5%'}}>
            <SideSuper/>
            </div>
            <div className="content">
            <SATambahAdmin/>
            </div>
        </div>
    )
}



export default SAAdmin;
=======
import React from "react";
import SideSuper from "./sidebar/SideSuper";
import SATambahAdmin from "./superadmin/SATambahAdmin";
import SuperHeader from "./header/SuperHeader";

function SACabang(){
    const containerStyles = {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '50px'
    };

    return(
        <div style={containerStyles}>
            <SuperHeader/>
            <div className="left-panel" style={{width:'5%'}}>
            <SideSuper/>
            </div>
            <div className="content">
            <SATambahAdmin/>
            </div>
        </div>
    )
}

export default SACabang;
>>>>>>> 3c6f8d7e7e8edd209141df9a3026932c769eade2
