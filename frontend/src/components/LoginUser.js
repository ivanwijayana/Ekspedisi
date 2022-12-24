import React, { useState } from "react";
import axios from "axios";

function LoginUser() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const postData = () => {
        console.log(username);
        console.log(password);
    }

    return (
        <div className="login">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" />
            <link href="/style.css" rel="stylesheet" type="text/css" />
            <link href="/login-user.css" rel="stylesheet" type="text/css" />
            <h1>Login User</h1>
            <form onSubmit={postData}>
                <label for="username">
                    <i className="fas fa-user"></i>
                </label>
                <input type="text" onChange={(e) => setUsername(e.target.value)} />

                <label for="password">
                    <i className="fas fa-lock"></i>
                </label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default LoginUser;