export default class AuthService {
    static logout = async () => {
        const res = await fetch('http://localhost:5000/api/Auth/logout', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include"
        })
        return res;
    }

    static login = async (email: string, password: string) => {
        const res = await fetch('http://localhost:5000/api/Auth/login', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({
                email,
                password
            })
        })
        return res;
    }

    static register = async (name:string, email:string,password:string)=>{
        const res = await fetch('http://localhost:5000/api/Auth/register',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                name,
                email,
                password
            })
        })
    }


}