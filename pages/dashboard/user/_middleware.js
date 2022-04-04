import { NextResponse } from "next/server";

const middleware = async (req) => {
    
    // const res = NextResponse.next();
    const { _token } = req.cookies;
    console.log(_token);
    const response = await fetch(`${process.env.urlApi}/me`, { 
        method: 'get', 
        headers: {
            'Authorization': 'Bearer '+ _token,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    if(data.role_id != 2){
        const url = req.nextUrl.clone()
        url.pathname = '/dashboard'
        return NextResponse.redirect(url)
    }
}

export default middleware;