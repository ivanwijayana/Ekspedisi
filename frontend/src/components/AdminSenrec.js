import React from "react";
import AdminTabelSenrec from "./admin/AdminTabelSenrec";
import SuperHeader from "./header/SuperHeader";
import SideAdmin from "./sidebar/SideAdmin";

function AdminSenrec(){
    const containerStyles = {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '50px'
    };

    return(
        <div style={containerStyles}>
            <SuperHeader/>
            <div className="left-panel" style={{width:'5%'}}>
            <SideAdmin/>
            </div>
            <div className="content">
            <AdminTabelSenrec/>
            </div>
        </div>
    )
}

export default AdminSenrec;