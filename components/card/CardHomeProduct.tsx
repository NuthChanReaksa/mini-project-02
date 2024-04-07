import Image from 'next/image'; // Import Image component from Next.js
import React from 'react';

const CardHomeProduct = () => {
    return (
        <div id="default-carousel" className="relative z-1 w-full" data-carousel="slide">
            {/* Carousel wrapper */}
            <div className="relative lg:h-[600px] overflow-hidden md:h-96 h-[700px]">
                {/* Item 1 */}
                <div className="shadow-md">
                    {/* Add shadow to the container div */}
                    <Image
                        src="https://t4.ftcdn.net/jpg/07/41/09/09/240_F_741090944_FV8Iik9MccRaDPVd1TxU2y4rdnZw5zcp.jpg"
                        alt="..."
                        layout="fill" // Optional: to fill the container
                        objectFit="cover" // Optional: to cover the entire container
                    />
                </div>
                <div className="absolute inset-x-[10%] hidden py-5 text-white md:block pt-[200px] text-left">
                    <h2 className="text-4xl font-bold mb-5">
                        Center of Science E-Commerce
                    </h2>
                    <p className="text-lg">
                        Welcome to CSTAD, your one-stop online shopping destination! At CSTAD, we are committed to providing our customers with a seamless and enjoyable shopping experience. Whether you are looking for the latest fashion trends, high-quality electronics, or unique gifts, CSTAD has got you covered.
                    </p>
                    <a href="enroll1/apply.html">
                        <button
                            type="button"
                            className="relative px-10 py-2 mt-10 overflow-hidden font-semibold rounded-lg bg-cyan-700 text-white"
                        >
                            Buy now !!
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CardHomeProduct;
