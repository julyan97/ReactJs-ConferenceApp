import axios from 'axios'
import http from 'axios'
import React, { Fragment, useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Contexts'
import ConferenceService from '../../Services/ConferenceService'
import { Conference } from '../Conference/Conference'
import { Navigation } from '../Navigation/Naviation'
interface IConference {
    id: number,
    name: string,
    date: string,
    time: string
}

export const ConferencesHookWithAxios = () => {

    const [arr, setArr] = useState<Array<any>>([])
    const [name, setName] = useState("");

    const auth = useContext(AuthContext)
    useEffect(() => {
        //(code)() for async
        (async () => {
            await ConferenceService.conferences()
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


// export default class ConferencesWithClass extends React.Component<{name?:string},{name:any}> {

//     constructor(props:any)
//     {
//         super(props)

//         this.state ={
//             name:[]
//         }
//     }
//     componentDidMount()
//     {
//             fetch("https://localhost:44336/api/Conference")
//             .then(res => res.json())
//             .then(
//                 x => 
//                 {
//                     console.log(x)
//                     let temp = (x as Array<IConference>).map(x=><Conference name={x.name}/>);
//                     this.setState({name:temp})
//                 })


//     }
//     render() {
//         return (
//             <div>
//                 {this.state.name}
//             </div>
//         )
//     }
// }


// export const ConferencesHookWithFetch = () => {

//     const [arr, setArr] = useState<Array<any>>([])

//     useEffect(() => {
//         fetch("https://localhost:44336/api/Conference")
//         .then(res => res.json())
//         .then(
//             x => 
//             {
//                 console.log(x)
//                 let temp = (x as Array<IConference>).map(x=><Conference name={x.name}/>);
//                 setArr(temp)
//             })
//     }, [])
//     return (
//         <div>
//                 {arr}
//         </div>
//     )
// }


