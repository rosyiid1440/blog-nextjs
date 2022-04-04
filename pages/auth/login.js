import Layout from "../../components/Layout";
import Link from 'next/link';
import { useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

export default function Login(props) {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${process.env.urlApi}/login`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: email, password: password})
        });
        const data = await response.json();

        Cookies.set('asdlkj',data.access_token);
        Cookies.set('loginStatus','true');
        router.push({
            pathname: '/dashboard'
        });
    }

    return (
        <Layout title="Login">
            <div className="row">
                <div className="col-md-4 mx-auto">
                    <div className="card mt-5">
                        <div className="card-header">
                            <h5>Login</h5>
                        </div>
                        <div className="card-body">
                            <form onSubmit={onSubmit.bind(this)} className="form">
                                <div className="form-group">
                                    <label className="form-label" >Email</label>
                                    <input className="form-control" type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label className="form-label" >Password</label>
                                    <input className="form-control" type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                </div>
                                <p>
                                    <span>Belum punya akun? daftar </span>
                                    <Link href="/register">
                                        <a>disini</a>
                                    </Link>
                                </p>
                                <button type="submit" className="btn btn-primary mt-3">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}