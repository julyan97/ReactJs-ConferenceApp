import React, { SyntheticEvent, useState } from 'react'
import { Redirect } from 'react-router-dom';
import AuthService from '../../Services/AuthService';

export const Login = (props:any) => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [redirect, setRedirect] = useState(false)

    const submit = async (e: SyntheticEvent) =>
    {
            e.preventDefault();

            console.log({email,password})
            const res = await AuthService.login(email,password);
            setRedirect(true);
    }
    if(redirect) window.location.href ="/"; // need to be <Redirect to=''/>

    return (
        <main className="form-signin">
            <form onSubmit={submit}>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                <div className="form-floating">
                    <input onChange={e => setEmail(e.target.value)} type="email" className="form-control"  placeholder="name@example.com" />
                </div>
                <div className="form-floating">
                    <input onChange={e => setPassword(e.target.value)} type="password" className="form-control"  placeholder="Password" />
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            </form>
        </main>
    )
}
