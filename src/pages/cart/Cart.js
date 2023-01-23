import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

const Cart = () => {
    const [data, setData] = useState([]);

    // Get All Card Data 
    useEffect(() =>{
      axios.get(`${process.env.REACT_APP_URL}/cart`)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    },[])

    //Delete Cart Item
    const handleDelete = (id) =>{
      fetch(`${process.env.REACT_APP_URL}/cart/${id}`,{
        method: "DELETE"
      })
      .then(res => res.json())
      .then(data => {
        if(data.acknowledged){
          console.log(data)
          toast.success("Delete item from cart")
        }
      })
    }

    return (
        <div className='mt-20'>
          {
            data.map(d => <div key={d._id}>
              {d._id} 
              <button onClick={() =>handleDelete(d._id)} className='btn btn-primary btn-sm ml-4 mt-3'>Clicked</button>
              <p>{d.id}</p>
            </div>)
          }
        </div>
    );
};

export default Cart;