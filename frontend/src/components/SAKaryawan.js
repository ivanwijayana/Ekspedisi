import React from "react";
import SideSuper from "./sidebar/SideSuper";
import SATambahKaryawan from "./superadmin/SATambahKaryawan";
import SuperHeader from "./header/SuperHeader";

function SAKaryawan(){
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
            <SATambahKaryawan/>
            </div>
        </div>
    )
}

export default SAKaryawan;