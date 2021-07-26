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
        const res = http.get("http://localhost:5000/api/Conference")
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
}