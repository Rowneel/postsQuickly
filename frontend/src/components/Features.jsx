import React from 'react'
import { FaRocket, FaCogs, FaShieldAlt } from 'react-icons/fa';

const Features = () => {
  return (
    
    <div className="mx-auto p-6 flex flex-col lg:flex-row bg-[#E8E6E6]">
    {/*Left container*/}
    <div className="lg:w-1/2 p-6 px-20 flex flex-col items-center justify-center">
        <div className='text-center'>
            <h2 className="text-3xl font-bold-Inter mb-4">Our Features</h2>
            <p className="text-gray-700">We offer a variety of interesting features that can help increase your engagement and manage your productivity </p>
            <button className='bg-white text-black py-2 px-4 mt-4 rounded hover:bg-blue-600'>Get Started</button>
        </div>
    </div>
    {/*Right container*/}
    <div className="lg:w-1/2 p-6 grid grid-cols-1 gap-6">
    <div className="flex items-center">
                    <FaRocket className="text-blue-500 text-2xl mr-2" />
                    <div>
                        <h3 className="text-xl font-semibold-Inter mb-2">Feature One</h3>
                        <p className="text-gray-700">Description of feature one. It's innovative and user-friendly.</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <FaCogs className="text-blue-500 text-2xl mr-2" />
                    <div>
                        <h3 className="text-xl font-semibold-Inter mb-2">Feature Two</h3>
                        <p className="text-gray-700">Description of feature two. Designed for maximum efficiency.</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <FaShieldAlt className="text-blue-500 text-2xl mr-2" />
                    <div>
                        <h3 className="text-xl font-semibold-Inter mb-2">Feature Three</h3>
                        <p className="text-gray-700">Description of feature three. Experience unparalleled performance.</p>
                    </div>
                </div>
                </div>
        </div>
    
  )
}

export default Features