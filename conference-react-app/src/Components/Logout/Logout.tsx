import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import AuthService from "../../Services/AuthService";


export const Logout = () => {

    const logout = async () => {

        // const res = await fetch('http://localhost:5000/api/Auth/logout', {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     credentials: "include"
        // })

        await AuthService.logout();
        window.location.href="/login";  // need to be <Redirect to=''/>
    }

    return (
        <Fragment>
            <li className="nav-item">
                <button style={{background:"white",border:"none"}}  onClick={logout} className="nav-link text-dark" >Logout</button>
            </li>
        </Fragment>
    )
    
}
