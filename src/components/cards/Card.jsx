import React from "react";

function card() {
    return (
        <>
            <div className="flex flex-wrap items-center justify-center mx-auto max-w-7xl my-5 h-[60rem]">
                {/* <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 my-5 py-5"> */}

                <div className="w-full h-[20rem] md:w-card-width mb-4 relative bg-white py-6 px-6 rounded-3xl m-8 sm:m-16 md:m-[20px] my-4 shadow-xl">
                    <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-pink-500 left-4 -top-6">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                            />
                        </svg>
                    </div>
                    <div className="mt-8">
                        <p className="text-xl font-semibold my-2">
                            Supply Market Intelligence
                        </p>
                        <div className="flex space-x-2 text-gray-400 text-sm">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                            <p>Marketing Team</p>
                        </div>
                        <div className="flex space-x-2 text-gray-400 text-sm my-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                            </svg>
                            <p>1 Weeks Left</p>
                        </div>
                        <div className="border-t-2"></div>
                        <div className="flex space-x-2 text-gray-400 text-sm my-3">
                            <p>
                                Chakaralaya Analytics offers AI-driven supplier
                                shortlisting for manufacturing companies. It's
                                customizable and streamlines the procurement
                                process
                            </p>
                        </div>
                        <div className="border-t-2"></div>
                    </div>
                </div>

                <div className="w-full h-[20rem] md:w-card-width mb-4 relative bg-white py-6 px-6 rounded-3xl m-8 sm:m-16 md:m-[20px] my-4 shadow-xl">
                    <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-green-500 left-4 -top-6">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                        </svg>
                    </div>
                    <div className="mt-8">
                        <p className="text-xl font-semibold my-2">
                            Supplier Relationship Management (SRM)
                        </p>
                        <div className="flex space-x-2 text-gray-400 text-sm">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                            <p>Core UI Team</p>
                        </div>
                        <div className="flex space-x-2 text-gray-400 text-sm my-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                            </svg>
                            <p>3 Weeks Left</p>
                        </div>
                        <div className="border-t-2 "></div>
                        <div className="flex space-x-2 text-gray-400 text-sm my-3">
                            <p>
                                An upcoming SRM product enhances supplier
                                collaboration and cost efficiency, set to launch
                                in six months.
                            </p>
                        </div>
                        <div className="border-t-2 "></div>
                    </div>
                </div>

                <div className="w-full h-[20rem] md:w-card-width mb-4 relative bg-white py-6 px-6 rounded-3xl m-8 sm:m-16 md:m-[20px] my-4 shadow-xl">
                    <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-4 -top-6">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                            />
                        </svg>
                    </div>
                    <div className="mt-8">
                        <p className="text-xl font-semibold my-2">
                            OEE and Machine Tool Selection Software
                        </p>
                        <div className="flex space-x-2 text-gray-400 text-sm">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                            <p>Marketing Team</p>
                        </div>
                        <div className="flex space-x-2 text-gray-400 text-sm my-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                            </svg>
                            <p>2 Days Left</p>
                        </div>
                        <div className="border-t-2 "></div>
                        <div className="flex space-x-2 text-gray-400 text-sm my-3">
                            <p>
                                Chakaralaya Analytics provides SaaS and COTS
                                solutions for optimizing Overall Equipment
                                Efficiency (OEE) and simplifying machine tool
                                selection in manufacturing.
                            </p>
                        </div>
                        <div className="border-t-2 "></div>
                    </div>
                </div>
                <div className="w-full md:w-card-width mb-4 relative bg-white py-6 px-6 rounded-3xl m-8 sm:m-16 md:m-[20px] my-4 shadow-xl">
                    <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-4 -top-6">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                            />
                        </svg>
                    </div>
                    <div className="mt-8">
                        <p className="text-xl font-semibold my-2">
                            OEE and Machine Tool Selection Software
                        </p>
                        <div className="flex space-x-2 text-gray-400 text-sm">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                            <p>Marketing Team</p>
                        </div>
                        <div className="flex space-x-2 text-gray-400 text-sm my-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                            </svg>
                            <p>2 Days Left</p>
                        </div>
                        <div className="border-t-2 "></div>
                        <div className="flex space-x-2 text-gray-400 text-sm my-3">
                            <p>
                                Chakaralaya Analytics provides SaaS and COTS
                                solutions for optimizing Overall Equipment
                                Efficiency (OEE) and simplifying machine tool
                                selection in manufacturing.
                            </p>
                        </div>
                        <div className="border-t-2 "></div>
                    </div>
                </div>

                {/* </div> */}
            </div>
        </>
    );
}

export default card;
