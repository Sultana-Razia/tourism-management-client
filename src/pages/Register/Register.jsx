import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import { IoIosEyeOff } from 'react-icons/io';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';


const Register = () => {

    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const { createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);

        //reset error
        setRegisterError('');
        setSuccess('');

        //Input field validation
        if (password.length < 8) {
            setRegisterError('Password should contain at least 8 characters');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password should contain at least one uppercase letter.');
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setRegisterError('Your password should contain at least one lower case letter.');
            return;
        }
        else if (!/[0-9]/.test(password)) {
            setRegisterError('Your password should contain at least one number.');
            return;
        }

        //Create User
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('User Created Successfully')
            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message);
            })
    }


    return (
        <div>
            <Navbar></Navbar>
            <div className="hero bg-base-200 min-h-screen rounded-md mt-6">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Create your account to access exclusive features and personalized content.</p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="text" name='photo' placeholder="Your Photo" className="input input-bordered" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name='password' placeholder="password" className="input input-bordered" required />
                                <span
                                    className="absolute top-12 right-3 text-xl"
                                    onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <IoIosEyeOff /> : <FaEye />
                                    }
                                </span>
                                <label className="label">
                                    <p>Already have an account? please <Link to='/login' className="text-blue-500 font-bold">Login</Link></p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>

                        {
                            registerError && <p className="text-red-600 text-center pb-4 font-medium">{registerError}</p>
                        }
                        {
                            success && <p className="text-green-600 text-center pb-4 font-medium">{success}</p>
                        }
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;