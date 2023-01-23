import axios from 'axios';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../components/shared/AuthProvider';

const CustomerProDtails = () => {
    const data = useLoaderData();
    const {user} = useContext(AuthContext)

    // Handle Order 
    const handleOrder = () =>{
        axios.post(`${process.env.REACT_APP_URL}/orders`, {
                            name: user.displayName,
                            email: user.email,
                            productName: data.name,
                            img: data.img,
                            price: data.price,
                            id:data._id 
                        })
                            .then(res => {
                                if(res.data.acknowledged){
                                    toast.success("Ordered Submitted Successfully")
                                }
                            })
                            .catch(err => console.log(err))
    }

    return (
        <div className='mt-20'>
            <div className="card lg:card-side bg-base-100 shadow-xl max-w-screen-sm mx-auto">
                <figure><img src={data.img} className="h-full" alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{data.name}</h2>
                    <h2 className="card-title">Price: ${data.price}</h2>
                    <p className='text-lg'>{data.details}</p>
                    <div className="card-actions justify-end">
                        <button onClick={handleOrder} className="btn btn-primary">Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerProDtails;