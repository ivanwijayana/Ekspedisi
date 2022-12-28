import React from "react";
import SideUser from "./sidebar/SideUser";
import SuperHeader from "./header/SuperHeader";
import UserCheck from "./user/UserCheck";

function User(){
    const containerStyles = {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '50px'
    };

    return(
        <div style={containerStyles}>
            <SuperHeader/>
            <div className="left-panel" style={{width:'5%'}}>
            <SideUser/>
            </div>
            <div className="content">
            <UserCheck/>
            </div>
        </div>
    )
}

export default User;