import React, { useState } from 'react'
import style from "./conf.module.css"
import '../../index.css'
import { Redirect } from 'react-router-dom'
import AuthService from '../../Services/AuthService'
import ConferenceService from '../../Services/ConferenceService'
export const Conference = (props:any) => {
    const [redirect, setRedirect] = useState(false)

    const deleteConference = async()=>
    {
        await ConferenceService.deleteConference(props.conference.id);
        setRedirect(true);
    }
    if(redirect) return(<Redirect to="/"/>)
    return (
    <div className='uper'>
        <p className='conferenceP'>{props.conference.name}</p>
        <p className='conferenceP'>{props.conference.date}</p>
        <p className='conferenceP'>{props.conference.time}</p>
        <div>
            <button className={style.yellow1} >See Event</button>
        </div>
            <button className={style.green1} >Edit</button>
            <button className={style.red1} onClick={deleteConference}>Delete</button>
        
    </div>
    )
}
