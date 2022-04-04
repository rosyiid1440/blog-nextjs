import { NextResponse } from "next/server";

export default function middleware(req){
    
    const res = NextResponse.next();
    const { asdlkj, _token } = req.cookies;

    if(asdlkj){
        res.cookie('_token',asdlkj,{
            httpOnly: true
        });
        res.clearCookie('asdlkj');
        return res;
    }
    
    if(!_token){
        const url = req.nextUrl.clone()
        url.pathname = '/auth/login'
        return NextResponse.redirect(url)
    }    
}