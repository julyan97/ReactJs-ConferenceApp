import http from "axios"

export default class ConferenceService
{
    static deleteConference =async (id:string)=>{
        const res = await fetch('http://localhost:5000/api/Conference/delete',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                id
            })
        })
    }

    static conferences = async () => {
        const res = http.get("http://localhost:5000/api/Conference/all")
        return (await res).data
    }

    static myConferences = async (email:string) => {
        const res = http.get(`http://localhost:5000/api/Conference/getByEmail?email=${email}`,)
        return (await res).data
    }

    static create = async (name:string,date:string,time:string)=> {
        const res = await fetch('http://localhost:5000/api/Conference/add',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                name,
                date,
                time
            })
        })
        
        return res;
    }

    static createByEmail = async (name:string,date:string,time:string,email:string)=> {
        const res = await fetch(`http://localhost:5000/api/Conference/addByEmail`,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                email,
                name,
                date,
                time
            })
        })
        
        return res;
    }
}