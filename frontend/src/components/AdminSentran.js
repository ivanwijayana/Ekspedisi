import React from "react";
import AdminTabelSentran from "./admin/AdminTabelSentran";
import SuperHeader from "./header/SuperHeader";
import SideAdmin from "./sidebar/SideAdmin";

function AdminSentran(){
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
            <AdminTabelSentran/>
            </div>
        </div>
    )
}

export default AdminSentran;