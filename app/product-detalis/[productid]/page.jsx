'use client'

import React, { useEffect, useState } from 'react';
import ProductApi from './../../utils/ProductApi';
import Link from 'next/link';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
const Page = ({ params }) => {

    const { productid } = React.use(params); // Unwrap params
    const [productslist, setproductslist] = useState([]);
    const [filteredProduct, setFilteredProduct] = useState(null); // State for the filtered product

    useEffect(() => {
        // Make sure productid exists and is a valid number (or string, depending on your API)
        if (productid) {
            getLatestProducts_();
        }
    }, [productid]); // Re-fetch data when productid changes

    const getLatestProducts_ = () => {
        ProductApi.getLatestProducts().then(res => {
            console.log(res.data.data); // Log the data to see the full list of products
            setproductslist(res.data.data);
        });
    };



    useEffect(() => {
        if (productslist.length > 0 && productid) {
            // Filter the product based on productid
            const filtered = productslist.filter(item => item.id.toString() === productid.toString());
            setFilteredProduct(filtered.length > 0 ? filtered[0] : null);
        }
    }, [productslist, productid]); // Re-filter when productslist or productid changes

    if (!productid) {
        return <div className=' bg-primary5 font-abril text-5xl m-auto flex justify-center'>Loading...</div>; // Show loading while waiting for productid
    }

    if (!filteredProduct) {
        return <div>Product not found</div>; // Handle case if product is not found
    }

    const baseUrl = "http://localhost:1337"; // Replace with your actual Strapi domain

    const router = useRouter()
    const { user } = useUser()


    return (
        <>



            <div className=' m-20'>

                <nav aria-label="Breadcrumb" className="flex ">
                    <ol className="flex overflow-hidden rounded-lg border border-gray-200 text-gray-600">
                        <li className="flex items-center">

                            <Link
                                href="/"
                            >
                                <div className="flex h-10 items-center gap-1.5 bg-gray-100 px-4 transition hover:text-gray-900"
                                >



                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="size-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                        />
                                    </svg>

                                    <span className="ms-1.5 text-xs font-medium"> Home </span>

                                </div>
                            </Link>
                        </li>

                        <li className="relative flex items-center">
                            <span
                                className="absolute inset-y-0 -start-px h-10 w-4 bg-gray-100 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180"
                            >
                            </span>

                            <Link href='/'>
                                {filteredProduct.Name ? <div className="flex h-10 items-center bg-white pe-4 ps-8 text-xs font-medium transition hover:text-gray-900"
                                >
                                    {filteredProduct.Name}
                                </div> : <div className="flex h-10 items-center bg-gray-400 pe-4 ps-8 text-xs font-medium transition hover:text-gray-900"
                                >

                                </div>}



                            </Link>

                        </li>
                    </ol>
                </nav>

                <div className=' flex'>

                    <div className=' w-2/3'>
                        <h3 className=' font-abril text-5xl py-5'> {filteredProduct.Name} </h3>


                        <p className=' font-mono'>{filteredProduct.Description}</p>
                        <div className='flex gap-8 '>
                            <p className=' bg-primary4 w-fit p-3 text-5xl font-abril rounded-xl shadow-2xl shadow-primary4 my-6 cursor-default'><span>Price: </span>{filteredProduct.price}$</p>


                            <button onClick={() => handleAddToCartClick()} className=' bg-primary2 w-fit p-3 text-5xl font-abril rounded-xl shadow-2xl shadow-primary2 my-6 text-white'> ORDER NOW !</button>
                        </div>



                    </div>
                    <div>
                        <img src={baseUrl + filteredProduct.ImageProduct?.url} width={450} height={200} alt='imageproduct'></img>
                    </div>
                </div>

            </div>


        </>
    );
};

export default Page; 
