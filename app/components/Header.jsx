'use client'
import { FaShoppingCart } from "react-icons/fa";

import { useUser, UserButton, SignedIn, SignedOut } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from "next/navigation";

const Header = () => {

    const [isLogged,setIsLogged]=useState(false)

    useEffect(() => {
      setIsLogged(window.location.href.toString().includes("sign-in"))  
      setIsLogged(window.location.href.toString().includes("sign-up"))  
    },[])

    const { user } = useUser()

    return !isLogged && (
        <div>

            <header className=" m-auto flex justify-center mt-3  bg-white">
                <div className=" flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">

                    <Link href='/'>
                        <span className="sr-only">Home</span>
                        <Image src='/logo.svg' width={50} height={50} alt='logo'></Image>

                    </Link>

                    <div className="flex flex-1 gap-28  items-center justify-end md:justify-between">
                        <nav aria-label="Global" className="hidden md:block">
                            <ul className="flex items-center gap-6 font-extrabold  text-primary5 font-abril text-2xl">
                                <li className=" hover:text-primary5/80 hover:text-4xl duration-500" >
                                    <Link href="/" >Home</Link>
                                </li>

                                <li className=" hover:text-primary5/80 hover:text-4xl duration-500">
                                    <Link href="/" >Explore</Link>

                                </li >

                                <li className=" hover:text-primary5/80 hover:text-4xl duration-500">
                                    <Link href="/" >Projects</Link>


                                </li>
                                <li className=" hover:text-primary5/80 hover:text-4xl duration-500">

                                    <Link href="/" > About Us</Link>


                                </li>
                                <li className=" hover:text-primary5/80 hover:text-4xl duration-500">

                                    <Link href="/" >Contact Us</Link>


                                </li>

                            </ul>
                        </nav>

                        <div className="flex items-center gap-4">
                            {!user ?
                                <div className="sm:flex sm:gap-4">
                                    <a
                                        className="block rounded-md font-abril  bg-primary2 px-3 py-2 text-xl font-medium text-white transition hover:bg-primary  shadow-primary shadow-2xl duration-300"
                                        href="/sign-in"
                                    >
                                        Login
                                    </a>

                                    <a
                                        className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-xl font-abril transition hover:text-black hover:bg-primary4 duration-300 shadow-2xl shadow-black/50 border-black outline-dashed  sm:block"
                                        href="/sign-up"
                                    >
                                        Register
                                    </a>
                                </div>
                                : <div className=" cursor-pointer flex">

                                    <FaShoppingCart className=" text-3xl text-primary5 mx-4" />
                                    <h2  className=" text-2xl -ml-4 mr-4 text-primary5 font-abril ">(0)</h2>

                                    <UserButton />
                                </div>}


                            <button
                                className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                            >
                                <span className="sr-only">Toggle menu</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

            </header>
        </div>
    )
}

export default Header