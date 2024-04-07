import React from "react";
import Image from "next/image"; // Importing Image component from Next.js

export default function AboutPage() {
    return (
        <main className="w-4/5 mx-auto py-5">
            <h2 className="text-3xl font-bold mt-5 text-center">
                About <span className="text-blue-900">E-CSTAD</span>{" "}
            </h2>

            {/* Slogan */}
            <div>
                <div className="bg-white py-4 px-4 my-5 rounded-lg">
                    <p className="flex items-center">
                        <i className="fas fa-bullhorn mr-4 text-2xl"></i> SLOGAN
                    </p>
                    <p className="ml-8 text-gray-500">
                        . Start your buying product with E-CSTAD
                    </p>
                </div>
            </div>
            {/* End slogan */}

            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-1">
                    <div className="p-4">
                        <Image
                            src="https://t4.ftcdn.net/jpg/05/88/63/09/240_F_588630919_T6LZJsr92WvGTl87E3U1k9ZrWJJoEIkO.jpg"
                            alt="Composite Image 1+4"
                            width={640}
                            height={480}
                            className="rounded-lg"
                        />
                    </div>
                    <div className="p-4">
                        <Image
                            src="https://t3.ftcdn.net/jpg/06/23/22/94/240_F_623229485_dJjXDiQIdFgzpfs6ZR1ppIPqE0bPdMnr.jpg"
                            alt="Composite Image 1+4"
                            width={640}
                            height={480}
                            className="rounded-lg"
                        />
                    </div>
                    <div className="p-4">
                        <Image
                            src="https://t4.ftcdn.net/jpg/07/08/23/35/240_F_708233570_EJ5WKm53tw0V5R7GKPdmEVBDnVouJEtL.jpg"
                            alt="Composite Image 3+6"
                            width={640}
                            height={480}
                            className="rounded-lg"
                        />
                    </div>
                </div>
            </div>

            <h3 className="text-2xl my-10 font-semibold text-center">
                What is Ecommerce Center of Science ?
            </h3>

            <div className="mb-5">
                <Image
                    src="https://t4.ftcdn.net/jpg/06/74/74/25/240_F_674742576_RCGb0F7B12zTcDfhMm15pflJhguo6Lin.jpg"
                    width={800}
                    height={533}
                    className="mx-auto"
                    alt=""
                />
                <p style={{ width: "70%" }} className="mx-auto my-4">
                    e-commerce platform! CSTAD is Cambodia is premier institution for
                    advancing science, technology, research, and digital skills. Whether
                    you are a student looking to enhance your knowledge .
                </p>
            </div>

            {/* More sections ... */}

            {/* Replace with remaining sections */}
            {/* Section with images */}
            <div className="my-12">
                <div className="flex flex-col md:flex-row gap-3">
                    <div className="w-full md:w-1/2 lg:w-1/3 ">
                        <Image
                            src="https://t4.ftcdn.net/jpg/06/74/74/25/240_F_674742576_RCGb0F7B12zTcDfhMm15pflJhguo6Lin.jpg"
                            alt="Description of the image"
                            width={640}
                            height={480}
                            className="rounded-lg"
                        />

                    </div>
                    <div className="w-full md:w-1/2 lg:w-2/3 p-2">
                        <div className="bg-white py-3 px-5 rounded-lg md:mb-0">
                            <p className="flex items-center mt-2">
                                <i className="fa-solid fa-eye mr-4 text-md"></i> VISION
                            </p>
                            <p className="ml-8 my-3 text-gray-500 text-sm">
                                . Advanced Ecommerce Institute in Cambodia
                            </p>
                        </div>
                        <div className="bg-white py-3 px-5 my-3 rounded-lg">
                            <p className="flex items-center">
                                <i className="fa-regular fa-circle-dot mr-4 text-md"></i>{" "}
                                MISSION
                            </p>
                            <p className="ml-8 my-3 text-gray-500 text-sm">
                                . Provide the latest product with high quality training and
                                mentoring
                            </p>
                            <p className="ml-8 my-3 text-gray-500 text-sm">
                                . Build up the capacity and experts Cambodia
                            </p>
                            <p className="ml-8 my-3 text-gray-500 text-sm">
                                . Consult and connect CSTAD trainees to top buy product.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* End of div with images */}

            {/* App download links */}
            <h2 className="text-3xl font-bold text-center mb-3">
                Check out our latest Installment <br />{" "}
                <span className="text-blue-900">CSTAD</span> MOBILE
            </h2>
            <p className="my-3 text-gray-500 text-md text-center">
                Stay Informed with market. Simplify registration and access essential
                info.
            </p>

            {/* End of App download links */}

            {/* About app */}
            <h2 className="text-3xl font-bold my-5 text-center">About this app</h2>
            <div className="w-4/5 mx-auto m-8 pb-10">
                <div className="flex flex-col md:flex-row gap-10 justify-center mx-5 ">
                    <div className="bg-white p-8 rounded-lg mb-4 md:mb-0">
                        <p className="flex items-center mt-2 font-semibold text-blue-800">
                            E-CSTAD
                            <span className="text-black pl-1">APP</span>
                        </p>
                        <p className="my-3 text-gray-700 text-sm">
                            The seller has provided information about their privacy practices
                            concerning the handling of your data as described below. Please
                            note that this information has not been verified by the e-commerce
                            platform. For more details, refer to the seller is privacy policy..
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-lg mb-4 md:mb-0">
                        <p className="flex items-center mt-2 font-semibold">APP PRIVACY</p>
                        <p className="my-3 text-gray-700 text-sm">
                            The seller has provided information about their privacy practices
                            concerning the handling of your data as described below. Please
                            note that this information has not been verified by the e-commerce
                            platform. For more details, refer to the seller is privacy policy.
                        </p>
                    </div>
                </div>
            </div>
            {/* End of about app div */}

            {/* Mentor div */}
            <hr style={{ border: "1px solid rgb(62, 62, 62)" }} />
        </main>
    );
}
