import React, { Fragment, useContext, useState } from 'react'
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../../Contexts';
import ConferenceService from '../../Services/ConferenceService';
import "../../static/css/site.css"
import { Navigation } from '../Navigation/Naviation'
export const CreateConference = () => {

    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [redirect, setRedirect] = useState(false);

    const auth = useContext(AuthContext)

    const submit = async () =>
    {
        setRedirect(true)
        if(auth.email)await ConferenceService.createByEmail(name,date,time,auth.email);
        else await ConferenceService.create(name,date,time);
    }
    console.log(redirect);
    if(redirect) return <Redirect to='/'/> //first way
   // if(redirect) window.location.href = "/"; // second way
    return (
        <Fragment>
            <div className="center">
                <form className="form1" onSubmit={submit}>
                    <h1 style={{ textAlign: "center" }}> Create conference </h1><br />
                    <label htmlFor="">Name</label>
                    <input onChange={e => setName(e.target.value)} name="ConferenceName" type="text" required />

                    <label htmlFor="">Date of the event</label>
                    <input onChange={e => setDate(e.target.value)} name="date" type="date" required />

                    <label htmlFor="">Time of the event</label>
                    <input onChange={e => setTime(e.target.value)} name="time" type="time" required />

                    <button style={{ margin: "2%" }}>Submit</button> <br />

                </form>
            </div>
        </Fragment>
    )
}
