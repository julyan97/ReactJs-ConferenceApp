import http from 'axios';
import React, { SyntheticEvent, useState } from 'react'
import { Redirect } from 'react-router-dom';
import AuthService from '../../Services/AuthService';

export const Register = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [redirect, setRedirect] = useState(false)

    const submit = async (e: SyntheticEvent)=>
    {   e.preventDefault();

        console.log(
            {
                name,email,password
            }
        )
        AuthService.register(name,email,password);
        setRedirect(true);
    }

    if(redirect)
    {
        return <Redirect to="/login"/>
    }

    return (
        <main className="form-signin">
            <form onSubmit={submit}>

                <h1 className="h3 mb-3 fw-normal">Please Register</h1>

                <div className="form-floating">
                    <input onChange={e => setName(e.target.value)} className="form-control" placeholder="Name" />
                </div>

                <div className="form-floating">
                    <input onChange={e => setEmail(e.target.value)} type="email" className="form-control" placeholder="name@example.com" />
                </div>

                <div className="form-floating">
                    <input onChange={e => setPassword(e.target.value)} type="password" className="form-control" placeholder="Password" />
                </div>

                <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>

            </form>
        </main>
    )
}
