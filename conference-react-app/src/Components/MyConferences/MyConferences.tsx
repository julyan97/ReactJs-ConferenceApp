import React, { Fragment, useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts';
import ConferenceService from '../../Services/ConferenceService';
import { Conference } from '../Conference/Conference';

interface IConference {
    id: number,
    name: string,
    date: string,
    time: string
}

export const MyConferences = (props:any) => {

    const [arr, setArr] = useState<Array<any>>([])
    const [name, setName] = useState("");

    const auth = useContext(AuthContext)
    useEffect(() => {
        //(code)() for async
        (async () => {
            await ConferenceService.myConferences(props.email)
                .then(
                    res => {
                        console.log(res)
                        let temp = (res as Array<IConference>).map((x, index) => <Conference key={index} conference={x} />);
                        setArr(temp)
                    })
        })()
    },[])
    

    return (
        <div>
            {
                auth.email ?
                    <Fragment>
                        <div className='button'>
                            <Link style={{ textDecoration: 'none', color: "black", marginBottom: "5%", paddingLeft: "2%", paddingRight: "2%" }} to="createConference" className='b'>Create conference</Link>
                        </div>
                        {arr}
                    </Fragment>
                    :
                    <Fragment>
                        <div className='button'>
                            <Link style={{ textDecoration: 'none', color: "black", paddingLeft: "2%", paddingRight: "2%" }} to="/login" className='b'>login</Link>
                        </div>
                        <div className='button'>
                            <Link style={{ textDecoration: 'none', color: "black", paddingLeft: "2%", paddingRight: "2%" }} to="/register" className='b'>Register</Link>
                        </div>
                    </Fragment>
            }
        </div>
    )
}
