'use client'
import { BiSolidBadgeCheck } from "react-icons/bi";
import React, { useEffect, useState } from 'react'
import ProductApi from '../utils/ProductApi'
import Image from 'next/image'
import Link from "next/link";

const ProductSection = () => {

    const [productslist, setproductslist] = useState([])
    useEffect(() => {
        getLatestProducts_()
    }, [])

    const getLatestProducts_ = () => {
        ProductApi.getLatestProducts().then(res => {
            console.log(res.data.data)
            setproductslist(res.data.data)
        })
    }

    const baseUrl = "http://localhost:1337"; // Replace with your actual Strapi domain




    return (
        <div>

            
            

            <ul className=' max-sm:grid-cols-1 max-lg:grid-cols-2 max-md:grid-cols-2   grid  m-4 border-primary5 border-4 bg-primary4 rounded-2xl shadow-2xl shadow-primary4 grid-cols-3'>
                {productslist.map((item) => (

                    <div className=' h-fit  outline-4 outline-offset-2 outline-dashed outline-primary5 bg-primary5 p-4 m-5 rounded-2xl  text-white font-semibold ' key={item.id}>
                        <div className=" relative">

                            <div className="">
                                <BiSolidBadgeCheck className={` flex  absolute top-2 left-2 ${item.isAvalible ? "text-primary5" : "text-primary2" }   text-4xl `}  />
                                <h3 className={`font-rakkas  absolute top-9 left-3 pt-1  ${item.isAvalible ? "text-primary5" : "text-primary2" }  `} >{item.isAvalible ? "متاحة حاليا" : "غير متاح"}</h3>
                            </div>
                           

                            <img className={` w-full ${item.ImageProduct?.url ? "border-primary4  bg-noise bg-white p-4 border-4  rounded-2xl -z-10  flex" : "hidden"}   `} src={item.ImageProduct ? baseUrl + item.ImageProduct.url : null} width={500} height={200} alt='shit' ></img>
                        </div>
                        <li className=' -mt-20 font-abril -ml-4 relative inset-10 z-10 flex text-4xl text-center  text-primary5 p-3  text-wrap outline-dashed outline-primary3 outline-offset-2 outline-4 bg-primary4 rounded-2xl  max-md:text-2xl max-md:-ml-6 max-lg:text-2xl max-xl:text-3xl max-xl:-ml-7 w-5/6 '>{item.Name}</li>
                        <li className=' mt-16 '>{item.Description}</li>
                        <div className=' m-2 rounded-xl shadow-2xl shadow-primary4/20 border-primary4 border-4 flex justify-between'>
                     
                            <Link href={`/product-detalis/${item.id}`} >
                            <div className=' bg-primary4 shadow-xl max-sm:text-4xl shadow-primary4/30 text-primary5 font-abril p-2 m-2 text-5xl rounded-xl'>Buy</div>
                            </Link>
                            <li className='  shadow-xl max-sm:text-4xl max-sm:p-1 max-sm:place-items-center max-sm:flex shadow-primary2/30  font-abril p-2 m-2 w-fit text-5xl bg-primary2 text-white rounded-xl  max-xl:text-2xl place-items-center flex '>{item.price}$</li>

                        </div>
                    </div>
                ))}

            </ul>



        </div>
    )
}

export default ProductSection