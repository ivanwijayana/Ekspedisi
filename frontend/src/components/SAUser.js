import React from "react";
import SideSuper from "./sidebar/SideSuper";
import SuperHeader from "./header/SuperHeader";
import SATambahUser from "./superadmin/SATambahUser";

function SAUser(){
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
            <SATambahUser/>
            </div>
        </div>
    )
}



export default SAUser;
