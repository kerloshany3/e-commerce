import React from 'react'

const Hero = () => {
    return (
        <div>
            <section className=" -mt-10">
                <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
                    <div className="mx-auto max-w-xl text-center">
                        <h1 className="text-3xl drop-shadow-xl text-primary5 font-extrabold sm:text-5xl">
                            All Your Digital Products
                            <strong className="font-extrabold text-primary2 sm:block">Is One Click Away </strong>
                        </h1>

                        <p className="mt-4 sm:text-xl/relaxed">
                           Start Exploring State of the art Assests Now!
                        </p>

                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <a
                                className="block w-full shadow-2xl shadow-primary4 hover:shadow-primary rounded outline-dashed  outline-offset-2 bg-primary4 text-black font-abril px-12 py-3 text-2xl font-medium  hover:bg-primary2 hover:text-white duration-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                                href="#"
                            >
                                Get Started
                            </a>

                            <a
                                className="block w-full rounded px-12 py-3  text-primary5 font-abril text-2xl shadow hover:text-primary4 hover:bg-primary5 duration-500 hover:outline-dashed hover:outline-primary5 hover:outline-offset-2 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                                href="#"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero