import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Orders = () => {
    const [data, setData] = useState([])

    // Get All Card Data 
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/orders`)
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, []);
    
    return (
        <div className='mt-10 p-5'>

            {/* Conditional Text and Table show. If has product in cart or not */}
            {
                data.length < 0 ?
                    <p className='text-3xl mt-20 p-4 font-semibold text-center'>There is no Order</p>
                    :
                    <div className="overflow-x-auto">
                        <p className='text-3xl text-center mb-5'>All Orders</p>
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Product Name</th>
                                    <th>Email</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((d, i) => <tr key={d._id}>
                                        <th>{i + 1}</th>
                                        <td>{d.productName}</td>
                                        <td className='font-medium'>{d.email}</td>
                                        <td>
                                            <Link to={`/dashboard/ordersdetails/${d._id}`} className="btn btn-sm btn-info mr-2">Dtails</Link>
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

export default Orders;