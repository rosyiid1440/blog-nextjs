import Layout from "../../components/Layout"
import Link from 'next/link'
import { useState } from "react";
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

export default function Register(props) {
    const router = useRouter();
    const [ nama, setNama ] = useState('');
    const [ username, setUsername ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const register = async (e) => {
        e.preventDefault();
        const response = await fetch(`${process.env.urlApi}/register`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nama: nama,
                username: username,
                email: email, 
                password: password
            })
        });
        if(response.ok){
            const data = await response.json();

            Cookies.set('asdlkj',data.access_token);
            Cookies.set('loginStatus','true');
            router.push({
                pathname: '/dashboard'
            });
        }else{
            console.log('error');
        }
        
    }

    return (
        <Layout title="Register">
            <div className="row">
                <div className="col-md-4 mx-auto">
                    <div className="card mt-5">
                        <div className="card-header">
                            <h5>Register</h5>
                        </div>
                        <div className="card-body">
                            <form onSubmit={register.bind(this)} className="form">
                                <div className="form-group">
                                    <label className="form-label">Nama</label>
                                    <input className="form-control" type="nama" id="nama" name="nama" value={nama} onChange={(e) => setNama(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Username</label>
                                    <input className="form-control" type="username" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Email</label>
                                    <input className="form-control" type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Password</label>
                                    <input className="form-control" type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                </div>
                                <p>
                                    <span>Sudah punya akun? login </span>
                                    <Link href="/login">
                                        <a>disini</a>
                                    </Link>
                                </p>
                                <button type="submit" className="btn btn-primary mt-3">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}