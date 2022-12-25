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