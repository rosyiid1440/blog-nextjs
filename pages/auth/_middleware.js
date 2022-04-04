import { NextResponse } from "next/server";

const middleware = async (req) => {
    const urllogout = req.page.name;
    const {  _token } = req.cookies;
    
    if(_token){
        if(urllogout == '/auth/logout'){
            const { _token } = req.cookies;
            const response = await fetch(`${process.env.urlApi}/logout`, { 
                method: 'post', 
                headers: {
                    'Authorization': 'Bearer '+ _token,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
        
            const res = NextResponse.next();
            res.clearCookie('_token');
            res.clearCookie('loginStatus');
            return res;
        }

        const url = req.nextUrl.clone()
        url.pathname = '/dashboard'
        return NextResponse.redirect(url)
    }else{
        if(urllogout == '/auth/logout'){
            const urllogin = req.nextUrl.clone()
            urllogin.pathname = '/auth/login'
            return NextResponse.redirect(urllogin)
        }
    }
}

export default middleware;