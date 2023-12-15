import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
const Accordion = () => {
    return (
        <section className="relative z-20 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
                            <div className=" text-5xl font-semibold ">
                            FAQs

                            </div>
                            <h2 className="mb-4 text-3xl font-semibold text-dark my-5">
                                Any Questions? Look Here
                            </h2>
                            <p className="text-base text-body-color dark:text-dark-6">
                                There are many variations of passages of Lorem
                                Ipsum available but the majority have suffered
                                alteration in some form.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 lg:w-full">
                        <AccordionItem
                            header="What is Chakaralaya Analytics Pvt Ltd?"
                            text="Chakaralaya Analytics is a forward-thinking startup incubated in VNEST (VIT-Chennai) dedicated to transforming the Manufacturing industry. Our co-founders, Dr. Sudarsanam, Dr. Venkatesh, Dr. Neelanarayanan, and Dr. Sasikumar, lead our team in providing innovative Software-as-a-Service (SaaS) products and services."
                        />
                        <AccordionItem
                            header=" What sets Chakaralaya Analytics apart from other companies?"
                            text="Our unique approach combines affordability and ease of implementation with a focus on No-Code/Low-Code Platforms. We pride ourselves on delivering solutions that are agile, efficient, and customizable to meet the diverse needs of the Manufacturing Industry."
                        />
                        <AccordionItem
                            header="How can I benefit from the Supply Market Intelligence product?"
                            text="Our Supply Market Intelligence product assists Purchase Managers in shortlisting vendors for their procurement needs. It provides valuable insights, utilizing AI-based algorithms to identify the best suppliers. Customizable for any manufacturing company, it's available as a COTS package for large organizations and as a SaaS product for MSMEs."
                        />
                        <AccordionItem
                            header="Are your products scalable for different business sizes?"
                            text="Absolutely! Our products are designed to be scalable, catering to the needs of both large manufacturing organizations (offered as COTS packages) and MSMEs (offered as SaaS products)."
                        />
                        {/* <AccordionItem
                            header="How long we deliver your first blog post?"
                            text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
                        />
                        <AccordionItem
                            header="How long we deliver your first blog post?"
                            text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
                        /> */}
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 right-0 z-[-1]">
                <svg
                    width="1440"
                    height="886"
                    viewBox="0 0 1440 886"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        opacity="0.5"
                        d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
                        fill="url(#paint0_linear)"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear"
                            x1="1308.65"
                            y1="1142.58"
                            x2="602.827"
                            y2="-418.681"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#3056D3" stopOpacity="0.36" />
                            <stop
                                offset="1"
                                stopColor="#F5F2FD"
                                stopOpacity="0"
                            />
                            <stop
                                offset="1"
                                stopColor="#F5F2FD"
                                stopOpacity="0.096144"
                            />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </section>
    );
};

export default Accordion;

// const AccordionItem = ({ header, text }) => {
//   const [active, setActive] = useState(false);

//   const handleToggle = () => {
//     event.preventDefault();
//     setActive(!active);
//   };
//   return (
//     <div className="mb-8 w-full rounded-lg bg-white p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] dark:bg-dark-2 dark:shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)] sm:p-8 lg:px-6 xl:px-8">
//       <button
//         className={`faq-btn flex w-full text-left`}
//         onClick={() => handleToggle()}
//       >
//         <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-primary dark:bg-white/5">
//           <svg
//             className={`fill-primary stroke-primary duration-200 ease-in-out ${
//               active ? "rotate-180" : ""
//             }`}
//             width="17"
//             height="10"
//             viewBox="0 0 17 10"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
//               fill=""
//               stroke=""
//             />
//           </svg>
//         </div>

//         <div className="w-full">
//           <h4 className="mt-1 text-lg font-semibold text-dark dark:text-white">
//             {header}
//           </h4>
//         </div>
//       </button>

//       <div
//         className={`pl-[62px] duration-200 ease-in-out ${
//           active ? "block" : "hidden"
//         }`}
//       >
//         <p className="py-3 text-base leading-relaxed text-body-color dark:text-dark-6">
//           {text}
//         </p>
//       </div>
//     </div>
//   );
// };
