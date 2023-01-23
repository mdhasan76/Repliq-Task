import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../components/shared/AuthProvider';

const Cart = () => {
  const [data, setData] = useState([]);
  const { user } = useContext(AuthContext);

  // Get All Card Data 
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL}/cart/${user?.email}`)
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [user?.email, data])

  // Delete Cart Item
  const handleDelete = (id) => {
    fetch(`${process.env.REACT_APP_URL}/cart/${id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          toast.success("Delete item from cart")
        }
      })
  }
  const totalAmount = data?.map(item => parseInt(item?.price) * 1)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0).toFixed(2);

  return (
    <div className='max-w-4xl mx-auto mt-20 p-5'>

      {/* Conditional Text and Table show. If has product in cart or not */}
      {
        data.length <= 0 ?
          <p className='text-3xl mt-20 p-4 font-semibold text-center'>NO Data Added yet</p>
          :
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map((d, i) => <tr key={d._id}>
                    <th>{i + 1}</th>
                    <td>{d.pName}</td>
                    <td>${d.price}</td>
                    <td>
                      <Link to={`/products/${d.id}`} className="btn btn-sm btn-info mr-2">Dtails</Link>
                      <button onClick={() => handleDelete(d._id)} className="btn btn-sm btn-error">Delete</button>
                    </td>
                  </tr>)
                }
                <tr>
                  <th></th>
                  <th></th>
                  <th> Total</th>
                  <th>${totalAmount}</th>
                </tr>
              </tbody>
            </table>
          </div>
      }
    </div>
  );
};

export default Cart;

