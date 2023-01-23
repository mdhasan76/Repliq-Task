import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AllCustomer = () => {
    const [data, setData] = useState([]);

    // Get All Card Data 
    useEffect(() =>{
        axios.get(`${process.env.REACT_APP_URL}/users`)
          .then(res => setData(res.data))
          .catch(err => console.log(err))
      },[])

    return (
        <div>
            {
                data.map(d => <div key={d._id}>
                    {d.email}
                </div>)
            }
        </div>
    );
};

export default AllCustomer;