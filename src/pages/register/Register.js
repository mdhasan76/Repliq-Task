import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { RiLockPasswordLine } from 'react-icons/ri';
import { SiNamecheap } from 'react-icons/si';
import { AiOutlineMail } from 'react-icons/ai';
import { AuthContext } from '../../components/shared/AuthProvider';
import { toast } from 'react-hot-toast';

const Register = () => {

    const {createUser,updateUser} = useContext(AuthContext);
    const [error, setError] = useState('');

    // Register new User
    const handleSignIn = (event) => {
        event.preventDefault();
        setError('')
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
        .then(result =>{
            updateUser(name)
            .then(res => {
                console.log(res.user);
                toast.success("Create Account Successfully")
                form.reset()
            })
            .catch(err => console.log(err))
        })
        .catch(err => setError(err.message))
    }
    return (
        <section>
            <div>
                <div className="hero min-h-[89vh] bg-gradient-to-r from-cyan-500 to-blue-500">
                    <div className="hero-content">
                        <div className="w-full shadow-2xl bg-base-100 card-body ">
                            <form onSubmit={handleSignIn}>

                                {/* FUll Name Input  */}
                                <div className="form-control">
                                    <label className="label pb-0">
                                        <span className="label-text text-lg font-semibold">Full Name</span>
                                    </label>
                                    <div>
                                        <SiNamecheap className='inline-block text-lg font-medium' />
                                        <input type="text" name="name" placeholder="Md Hasan" className="p-3 border-b-2 focus:outline-none focus:border-b-4 focus:border-stone-700 font-medium text-lg" required />
                                    </div>
                                </div>

                                {/* Email Input  */}
                                <div className="form-control">
                                    <label className="label pb-0">
                                        <span className="label-text text-lg font-semibold"> Email</span>
                                    </label>
                                    <div>
                                        <AiOutlineMail className='inline-block text-lg font-medium' />
                                        <input type="email" name="email" placeholder="example@gmail.com" className="p-3 border-b-2 focus:border-stone-700 focus:outline-none focus:border-b-4 font-medium text-lg" required/>
                                    </div>
                                </div>

                                {/* Password Input  */}
                                <div className="form-control mb-3">
                                    <label className="label pb-0">
                                        <span className="label-text text-lg font-semibold">Password</span>
                                    </label>
                                    <div>
                                        <RiLockPasswordLine className='inline-block text-lg font-medium' />
                                        <input type="password" placeholder="Password" name='password'  className="p-3 border-b-2 focus:outline-none focus:border-stone-700 focus:border-b-4 font-medium text-lg" required />
                                    </div>
                                </div>
                                <p className='text-sm text-red-500 py-2'>{error}</p>
                                <div className="form-control">
                                    <button className="btn text-white border-none rounded-full bg-gradient-to-bl from-indigo-500 to-primary">Submit</button>
                                </div>
                            </form>

                            <p className='block text-center text-sm label opacity-80'>Already have account?
                                <Link to='/login' className='label-text-alt link link-hover text-lg font-medium inline text-left'> Log in</Link> </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;