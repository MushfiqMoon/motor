import React from 'react'
import { FaSearchLocation } from 'react-icons/fa'
import { Link, useLoaderData } from 'react-router-dom'

export const Category = () => {
    const data = useLoaderData()

    return (
        data.length ?
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {
                        data?.map(item =>

                            <div key={item?._id} className="p-4 md:w-1/3">
                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden drop-shadow-md">
                                    <img src={item?.product_img} alt={item?.product_name} />
                                    <div className='pl-5 bg-zinc-200'>
                                        <h2 className="card-title text-primary">{item?.product_name}</h2>
                                        <p className='flex items-center'><span className='mr-3 text-accent'><FaSearchLocation /></span> {item?.seller_location}</p>
                                    </div>
                                    <div className="px-6 pt-6 bg-white flex justify-between">
                                        <p>Original Price:<span className='text-accent'> {item?.original_price} ৳</span></p>
                                        <p>Resell Price:<span className='text-accent'> {item?.resell_price} ৳</span></p>
                                    </div>
                                    <div className="p-6 bg-white flex justify-between">
                                        <Link to={`/product/single/${item?._id}`} className="text-primary inline-flex items-center mt-3">More Info
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        )
                    }
                </div>
            </div>
        </section >
        : 
        <div className='font-medium title-font mt-4 text-gray-900 text-lg text-accent p-24'>No Product Found on this Category!!</div>
    )
}
