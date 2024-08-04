/* eslint-disable no-unused-vars */
import React from 'react'
import image from '../assets/avataaars.svg'

export default function Home() {
    return (
        <>
            <div className='bg-[#1ABC9C] flex flex-col justify-center text-center'>
                <div className=' w-full flex justify-center mb-[16px] mt-4'>
                    <img src={image} className='w-[250px] text-center' alt="" />
                </div>
                <div className="text-center pt-4 text-white mb-[16px]" >
                    <h2 className="text-uppercase mb-3 fs-1 fw-bolder ">start Framework</h2>
                    <div className="d-flex align-items-center justify-content-center mb-3">
                        <div className="line me-3 bg-white" ></div>
                        <i className="fa-solid fa-star"></i>
                        <div className="line ms-3 bg-white" ></div>
                    </div>
                </div>
                <div className='text-white mb-44'>Graphic Artist - Web Designer - Illustrator</div>
            </div>
        </>
    )
}
