import { NextResponse } from "next/server";
import { useRouter } from 'next/router';
import { useEffect } from "react";

function logout(props) {
    const router = useRouter();
    const aksi = () => {
        router.push({
            pathname: '/auth/login'
        });
    }
    
    useEffect(() => {
          aksi();
    }, [])

    return (
        <div>
            
        </div>
    );
}

export default logout;