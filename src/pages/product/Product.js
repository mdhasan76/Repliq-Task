import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../components/shared/AuthProvider';

const Product = () => {
    const [data, setData] = useState([]);
    const {user} = useContext(AuthContext);

    // Load All Product
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/products`)
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [])

    // Add To cart Product 
    const addToCart = (id) => {
        axios.post(`${process.env.REACT_APP_URL}/cart`, {
            id,
            orderBy: user.email,
            name:user.displayName
        })
        .then(res => {
            if (res.data.acknowledged) {
                toast.success("Added TO Cart")
            }
        })
        .catch(err => console.log(err))
    }

    return (
        <div className='grid grid-cols-3 gap-5 mt-16'>
            {
                data.map(d => <div key={d._id} className="border-2">
                    <div className='[&_div]:hover:top-0 [&_div]:hover:visible relative' to="">
                        <img alt="fruit" src={d?.img} className="h-72 w-full" />
                        <div className='flex justify-between px-3 text-xl'>
                            <h3 className='text-center font-medium  py-3'>{d.name}</h3>
                            <h3 className='text-center font-medium py-3'>{d.price}</h3>
                        </div>
                        <div className='absolute duration-300 top-full w-full h-full bg-slate-700 opacity-60 grid place-content-center  invisible'>
                            <div>
                                <Link to="/" className='border-2 mr-2 border-white px-3 py-2 text-white'>Buy Now</Link>
                                <button onClick={() => addToCart(d._id)} className='border-2 border-white px-3 py-2 text-white'>Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </div>)
            }

        </div>
    );
};

export default Product;