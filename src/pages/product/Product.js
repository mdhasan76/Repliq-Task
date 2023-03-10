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
    const addToCart = (val) => {
        axios.post(`${process.env.REACT_APP_URL}/cart`, {
            id:val._id,
            orderBy: user.email,
            name:user.displayName,
            price:val.price,
            img:val.img,
            pName: val.name
        })
        .then(res => {
            if (res.data.acknowledged) {
                toast.success("Added TO Cart")
            }
        })
        .catch(err => console.log(err))
    }

    return (
        <div className='p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-16'>
            {
                data.map(d => <div key={d._id} className="border-2">
                    <div className='[&_div]:hover:top-0 [&_div]:hover:visible relative' to="">
                        <img alt="fruit" src={d?.img} className="h-72 w-full" />
                        <div className='flex justify-between px-3 text-xl'>
                            <h3 className='text-center font-medium  py-3'>{d.name}</h3>
                            <h3 className='text-center font-medium py-3'>${d.price} kg</h3>
                        </div>
                        <div className='absolute duration-300 top-full w-full h-full bg-slate-700 opacity-60 grid place-content-center  invisible'>
                            <div>
                                <Link to={`/products/${d._id}`} className='border-2 mr-2 border-white px-3 py-2 text-white'>Details</Link>
                                <button onClick={() => addToCart(d)} className='border-2 border-white px-3 py-2 text-white'>Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </div>)
            }

        </div>
    );
};

export default Product;