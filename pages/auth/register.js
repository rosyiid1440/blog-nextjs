import Layout from "../../components/Layout"
import Link from 'next/link'

export default function Register(props) {
    return (
        <Layout title="Register">
            <div className="row">
                <div className="col-md-4 mx-auto">
                    <div className="card mt-5">
                        <div className="card-header">
                            <h5>Register</h5>
                        </div>
                        <div className="card-body">
                            <form className="form">
                                <div className="form-group">
                                    <label className="form-label">Nama</label>
                                    <input className="form-control" type="nama" id="nama" name="nama"/>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Username</label>
                                    <input className="form-control" type="username" id="username" name="username"/>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Email</label>
                                    <input className="form-control" type="email" id="email" name="email"/>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Password</label>
                                    <input className="form-control" type="password" id="password" name="email"/>
                                </div>
                                <p>
                                    <span>Sudah punya akun? login </span>
                                    <Link href="/login">
                                        <a>disini</a>
                                    </Link>
                                </p>
                                <button className="btn btn-primary mt-3">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}