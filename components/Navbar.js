import Link from "next/link"
import { useState } from "react";
import { useEffect } from "react";
import Cookies from 'js-cookie'

function Navbar({ datas }) {
    const [status, setStatus ] = useState('');

    const get = async (res) => {
        const login = Cookies.get('loginStatus');
        if(login){
            setStatus('true');
        }else{
            setStatus('false');
        }
    }

    useEffect(() => {
        get();
    }, [])

    return (
        <div>
            <nav className="navbar sd navbar-expand-lg navbar-light bg-white py-3">
                <div className="container">
                    <Link href="/">
                        <a className="navbar-brand">{process.env.appName}</a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link href="/kategori">
                                <a className="nav-link">Kategori</a>
                            </Link>
                        </li>
                    </ul>
                        {status == 'true' ? (
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link href="/auth/logout">
                                        <a className="nav-link">Logout</a>
                                    </Link>
                                </li>
                            </ul>
                        ) : (
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link href="/auth/login">
                                        <a className="nav-link">Login</a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/auth/register">
                                        <a className="nav-link">Register</a>
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </nav>
            <style jsx>
                {`
                .sd{
                    border-color: #e7e7e7;
                    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.09);
                }
                `}
            </style>
        </div>
    );
}

export default Navbar;