import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import Navbar from '../../Shared/Navbar/Navbar';

const Login = () => {

    const { signIn, handleGoogleSignIn, handleGithubSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();

        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        // console.log(email, password);
        signIn(email, password)
            .then(result => {
                console.log(result.user);

                //navigate after login
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error);
            })
    }



    return (
        <div>
            <Navbar></Navbar>
            <div className="hero bg-base-200 min-h-screen rounded-md mt-6">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Welcome back! Please enter your credentials to log into your account.</p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <p>Do not have an account please <Link to='/register' className="text-blue-500 font-bold">Register</Link></p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p className="text-center text-3xl font-semibold">or</p>
                        <div className="form-control mt-2 px-7">
                            <button onClick={handleGoogleSignIn} className="btn btn-primary">Continue with Google</button>
                        </div>
                        <p className="text-center text-3xl font-semibold">or</p>
                        <div className="form-control my-2 px-7">
                            <button onClick={handleGithubSignIn} className="btn btn-primary">Continue with Github</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;