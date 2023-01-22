import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Cart = () => {
    const [data, setData] = useState([]);

    // Get All Card Data 
    useEffect(() =>{
      axios.get(`${process.env.REACT_APP_URL}/cart`)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    },[])

    return (
        <div className='mt-20'>
          {
            data.map(d => <div key={d._id}>
              {d.id}
            </div>)
          }
        </div>
    );
};

export default Cart;