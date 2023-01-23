import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { ImImage, ImPriceTag } from 'react-icons/im';
import { SiNamecheap } from 'react-icons/si';

const AddProduct = () => {
    const [loading, setLoading] = useState(false);
    const imgbbAPI = process.env.REACT_APP_imgbb;

    // Sumbit FOrm
    const handleSubmit = (e) => {
        setLoading(true)
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const details = form.details.value;
        const img = form.img.files[0];

        const formData = new FormData();
        formData.append('image', img)

        // Send img in Img hoising (imgbb)
        fetch(`https://api.imgbb.com/1/upload?key=${imgbbAPI}`, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    axios.post(`${process.env.REACT_APP_URL}/addproduct`, {
                        name,
                        price,
                        details,
                        img: data.data.url
                    })
                        .then(res => {
                            if (res.data.acknowledged) {
                                toast.success("Product Added")
                                setLoading(false)
                                form.reset()
                            }
                        })
                        .catch(err => console.log(err))
                }
            })
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
                                    required/>
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

                                <div className="form-control">
                                    {
                                        loading === false ?
                                            <button className="btn text-white border-none rounded-full bg-gradient-to-bl from-indigo-500 to-primary">Submit</button> :
                                            <button className="btn text-white border-none rounded-full bg-gradient-to-bl from-indigo-500 to-primary"> <svg className="animate-spin bg-white h-5 w-5 mr-3" viewBox="0 0 24 24"></svg> </button>
                                    }
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddProduct;