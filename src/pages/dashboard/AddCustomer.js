import React, { useState } from 'react';
import { ImPriceTag } from 'react-icons/im';
import { SiNamecheap } from 'react-icons/si';
import {ImImage} from "react-icons/im"

const AddCustomer = () => {
    const [error, setError] = useState("")

    // Sumbit FOrm
    const handleSubmit = (e) =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const details = form.details.value;
        const img = form.img.files[0];
        console.log(name, price, details,img)

        // setDataLoading(true)
        // // upload img in imgbb 
        // const formData = new FormData();
        // formData.append('image', img)
        // fetch(`https://api.imgbb.com/1/upload?key=${imgbbAPI}`, {
        //     method: "POST",
        //     body: formData
        // })
        //     .then(res => res.json())
        //     .then(imgdata => {
        //         const userImg = imgdata.data.url;
        //         const user = {
        //             name: data.name,
        //             email: data.email,
        //             password: data.password,
        //             img: userImg,
        //             title: data.title

        //         }
    }

    return (
       <section>
            <div>
                <div className="hero min-h-[89vh] bg-gradient-to-r from-cyan-500 to-blue-500">
                    <div className="hero-content">
                        <div className="w-full shadow-2xl bg-base-100 card-body ">
                            <form onSubmit={handleSubmit}>

                                {/* Product Name Input  */}
                                <div className="form-control">
                                    <label className="label pb-0">
                                        <span className="label-text text-lg font-semibold">Product Name</span>
                                    </label>
                                    <div>
                                        <SiNamecheap className='inline-block text-lg font-medium' />
                                        <input type="text" name="name" placeholder="Banana" className="p-3 border-b-2 focus:outline-none focus:border-b-4 focus:border-stone-700 font-medium text-lg" required />
                                    </div>
                                </div>

                                {/* Product Img  */}
                                <div className="form-control mb-3">
                                    <label className="label pb-0">
                                        <span className="label-text text-lg font-semibold"><ImImage className='inline-block text-lg font-medium mr-2' />Product img</span>
                                    </label>

                                    <input type="file" name="img" placeholder="img" className="p-3 border-b-2 focus:outline-none focus:border-b-4"
                                         />
                                </div>

                                {/* Product Price */}
                                <div className="form-control mb-3">
                                    <label className="label pb-0">
                                        <span className="label-text text-lg font-semibold"><ImPriceTag className='inline-block text-lg font-medium mr-2' />Product Price</span>
                                    </label>

                                    <input type="number" name="price" placeholder="$12" className="p-3 border-b-2 focus:outline-none focus:border-b-4"
                                         />
                                </div>

                                {/* Password Input  */}
                                <div className="form-control mb-3">
                                    <label className="label pb-0">
                                        <span className="label-text text-lg font-semibold">Description</span>
                                    </label>
                                    <div>
                                       <textarea className='w-full border-2 mt-2 p-3' rows={5} placeholder="Dtails about the product" name="details" >

                                       </textarea>
                                    </div>
                                </div>

                                <p className='text-sm text-red-500 py-2'>{error}</p>
                                <div className="form-control">
                                    <button className="btn text-white border-none rounded-full bg-gradient-to-bl from-indigo-500 to-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddCustomer;