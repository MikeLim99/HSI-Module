import React, { useState } from 'react'
import Logo from '../../assets/hsi-logo.png'
import { useNavigate } from 'react-router-dom';

export default function JobCards({ JobTitle, JobDescription, spans }) {
return (
    <>
        <div className='bg-white shadow-md rounded-xl p-4'>
            {/* card content */}
            <div className='flex justify-center'>
                <div className='w-[40%] flex-auto'>
                    <img src={Logo} alt="HSI Logo" className='h-[140px]'/>
                </div>
                <div className='w-[60%] flex-auto text-right'>
                    <h2 className='font-bold text-xl'>{JobTitle}</h2>
                    <p className='text-sm italic text-gray-700'>{JobDescription}</p>
                    <div className='gap-2 flex justify-end py-2 flex-wrap pl-1'>
                        {Array.isArray(spans) && spans.map((item, index) => (
                            <span key={index} className={`border px-5 rounded-lg border-gray-500 max-h-fit`}>{item}</span>
                        ))}
                    </div>
                    <div className='flex justify-end items-center pt-5'>
                            <div>
                                    <h1 className='font-bold'>Highly Succeed Inc.</h1>
                                    
                                    <h1 className='font-light italic text-gray-500 text-sm'>Mandaluyong City</h1>
                            </div>
                            <img src={Logo} alt="HSI Logo" className='h-[65px]'/>
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-center px-10'>
            <button onClick={handleViewDetails} className='px-2 py-1 border border-gray-300 w-full text-center bg-yellow-500 rounded-lg text-white'>View Job Details</button>
            </div>
        </div>
    </>
)
}
