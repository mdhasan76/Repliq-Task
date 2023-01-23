import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AllProducts = () => {
    const [data, setData] = useState([]);

    // Get All Product Data 
    useEffect(() =>{
        axios.get(`${process.env.REACT_APP_URL}/products`)
          .then(res => setData(res.data))
          .catch(err => console.log(err))
      },[])
    
    return (
        <div>
            {
                data.map(d => <div key={d._id}>
                    {d.name}
                    <button className='btn btn-info btn-sm ml-4 mt-2'>Dtails</button>
                </div>)
            }
        </div>
    );
};

export default AllProducts;