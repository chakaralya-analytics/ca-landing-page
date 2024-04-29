import React from "react";
import global from "../../images/globe.jpg";
function InfoCard() {
    return (
        <div>
            <div className="flex flex-row items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16 mx-auto max-w-7xl">
                <div className="mx-5 my-5">
                    <img
                        className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
                        src={global}
                        alt="feature image 2"
                    />
                </div>
                <div className="text-gray-900 sm:text-lg dark:text-gray-700  my-5 py-5">
                    <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 ">
                        We invest in the world’s potential
                    </h2>
                    <p className="mb-8 font-light lg:text-xl">
                    Our mission is to revolutionize the Manufacturing industry by offering cutting-edge Software-as-a-Service (SaaS) products that are not only affordable but also easy to implement. 
                    </p>

                    <ul
                        role="list"
                        className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
                    >
                        <li className="flex space-x-3">
                            <svg
                                className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            <span className="text-base font-medium leading-tight text-gray-900 ">
                            Analytics Services
                            </span>
                        </li>
                        <li className="flex space-x-3">
                            <svg
                                className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            <span className="text-base font-medium leading-tight text-gray-900 ">
                            Data Migration
                            </span>
                        </li>
                        <li className="flex space-x-3">
                            <svg
                                className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            <span className="text-base font-medium leading-tight text-gray-900 ">
                            Application Migration
                            </span>
                        </li>
                        <li className="flex space-x-3">
                            <svg
                                className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            <span className="text-base font-medium leading-tight text-gray-900 ">
                            Supplier Relationship Management
                            </span>
                        </li>
                        <li className="flex space-x-3">
                            <svg
                                className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            <span className="text-base font-medium leading-tight text-gray-900 ">
                            OEE and Machine Tool Selection
                            </span>
                        </li>
                    </ul>
                    <p className="font-light lg:text-xl">
                    We leverage No-Code/Low-Code Platforms to craft products that exceed customer expectations in the Manufacturing Industry. Our focus is on delivering solutions that are agile, efficient, and customizable to meet the diverse needs of our clients.
                    </p>
                </div>
            </div>
            {/* next card starts here */}

           
        </div>
    );
}

export default InfoCard;
