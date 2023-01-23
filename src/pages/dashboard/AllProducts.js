import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllProducts = () => {
    const [data, setData] = useState([]);

    // Get All Product Data 
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/products`)
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='mt-10 p-5'>

            {/* Conditional Text and Table show. If has product in cart or not */}
            {
                data.length < 0 ?
                    <p className='text-3xl mt-20 p-4 font-semibold text-center'>There is no Customer</p>
                    :
                    <div className="overflow-x-auto">
                        <p className='text-3xl text-center mb-5'>All Products</p>
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((d, i) => <tr key={d._id}>
                                        <th>{i + 1}</th>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={d.img} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{d.name}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <Link to={`/products/${d._id}`} className="btn btn-sm btn-info mr-2">Dtails</Link>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
            }
        </div>
    );
};

export default AllProducts;