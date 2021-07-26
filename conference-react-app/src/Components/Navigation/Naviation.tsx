import { render } from '@testing-library/react'
import React, { Fragment, useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Contexts'
import { Logout } from '../Logout/Logout'

export const Navigation = (props: any) => {

    useEffect(() => {
        (async () => {
            const res = await fetch('http://localhost:5000/api/Auth/user', {
                headers: { "Content-Type": "application/json" },
                credentials: "include",
            })
            const content = await res.json();
            props.setName(content.email)


        })()
    }, [])


    const auth = useContext(AuthContext)

    const authenticated = auth.email;

    console.log(props.email)
    return (
        <header>
            <nav style={{ color: "rgb(2, 62, 99)" }} className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
                <div className="container">
                    <Link to="/" className="navbar-brand" >Conference Empire</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse d-sm-inline-flex ">
                        <ul className="navbar-nav flex-grow-1">
                            <li className="nav-item">
                                <Link to="/" className="nav-link text-dark" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/createConference" className="nav-link text-dark" >Create</Link>
                            </li>
                        </ul>

                        <ul className="navbar-nav flex-grow-1">

                            {authenticated ?
                                <li className="nav-item">
                                    <label  className="nav-link font-weight-bold" style={{color:"green"}} >hi: {authenticated}</label>
                                </li> : null}
                                <li className="nav-item">
                                <Link to="/myConferences" className="nav-link text-dark" >MyConferences</Link>
                            </li>
                            {!authenticated ?
                                <Fragment >
                                    <li className="nav-item">
                                        <Link to="/login" className="nav-link text-dark" >Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/register" className="nav-link text-dark" >Register</Link>
                                    </li>
                                </Fragment>
                                : <Logout />
                            }


                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
