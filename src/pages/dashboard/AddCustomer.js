import React, { useState } from 'react';
import { ImPriceTag } from 'react-icons/im';
import { SiNamecheap } from 'react-icons/si';
import { ImImage } from "react-icons/im"
import axios from 'axios';
import { toast } from 'react-hot-toast';

const AddCustomer = () => {
    const [error, setError] = useState("");
    const imgbbAPI = process.env.REACT_APP_imgbb;
    console.log(imgbbAPI)
    // Sumbit FOrm
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const type= form.type.value;
        
        // save user info in db
        axios.post(`${process.env.REACT_APP_URL}/users`, {
            name,
            email,
            type,
        })
        .then(res => {
            if(res.data.acknowledged){
                toast.success("Create Account Successfully")
                form.reset()
            }
        })
        .catch(err => console.log(err))
    }

    return (
        <section>
            <div>
                <div className="hero min-h-[89vh] bg-gradient-to-r from-cyan-500 to-blue-500">
                    <div className="hero-content">
                        <div className="w-full shadow-2xl bg-base-100 card-body ">
                            <form onSubmit={handleSubmit}>

                                {/* Product Name Input  */}
                                <div className="form-control">
                                    <label className="label pb-0">
                                        <span className="label-text text-lg font-semibold">User Name</span>
                                    </label>
                                    <div>
                                        <SiNamecheap className='inline-block text-lg font-medium' />
                                        <input type="text" name="name" placeholder="Hasan" className="p-3 border-b-2 focus:outline-none focus:border-b-4 focus:border-stone-700 font-medium text-lg" required />
                                    </div>
                                </div>

                                {/* Email  */}
                                <div className="form-control">
                                    <label className="label pb-0">
                                        <span className="label-text text-lg font-semibold">Email</span>
                                    </label>
                                    <div>
                                        <SiNamecheap className='inline-block text-lg font-medium' />
                                        <input type="text" name="email" placeholder="hasan@gmail.com" className="p-3 border-b-2 focus:outline-none focus:border-b-4 focus:border-stone-700 font-medium text-lg" required />
                                    </div>
                                </div>

                                 {/* account Input  */}
                                 <div className="form-control mt-5">
                                    <label className="label pb-0">
                                        <span className="label-text text-lg font-semibold">Create Account as a?</span>
                                    </label>
                                    <div>
                                        <select className="p-3 w-full border-1 focus:border-stone-700  font-medium text-lg" name='type'>
                                            <option>User</option>
                                            <option>Admin</option>
                                        </select>
                                    </div>
                                </div>

                                <p className='text-sm text-red-500 py-2'>{error}</p>
                                <div className="form-control">
                                    <button className="btn text-white border-none rounded-full bg-gradient-to-bl from-indigo-500 to-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddCustomer;