/* eslint-disable no-unused-vars */
import React from 'react'

export default function Footer() {
    return (
        <>
            <div className='flex flex-wrap p-[20px] bg-[#2C3E50] justify-center text-center text-white w-full  px-5' >

                <div className='flex flex-col w-full sm:w-1/3 md:w-1/3 lg:w-1/3 p-4'>
                    <h3 className='pt-5 m-2 font-medium  fs-3'>LOCATION</h3>
                    <p className='mb-3'>2215 John Daniel Drive</p>
                    <p className='mb-4' >Clark, MO 65243</p>
                </div>
                <div className=' w-full sm:w-1/3 md:w-1/3 lg:w-1/3 text-center p-4'>
                    <h3 className='pt-5 m-2 font-medium  fs-3'>AROUND THE WEB</h3>
                    <div className=' mb-4  '>
                        <i className="fa-brands fa-facebook mx-1 border-1 border-white p-3   rounded-full  "></i>
                        <i className="fa-brands fa-twitter mx-1 border-1 border-white p-3 rounded-full  "></i>
                        <i className="fa-brands fa-linkedin-in mx-1 border-1 border-white p-3 rounded-full  "></i>
                        <i className="fa-solid fa-globe mx-1 border-1 border-white p-3 rounded-full   "></i>
                    </div>

                </div>
                <div className='flex flex-col w-full sm:w-1/3 md:w-1/3 lg:w-1/3 p-4'>
                    <h3 className='pt-5 m-2 font-medium  fs-3'>ABOUT FREELANCER</h3>
                    <p className='mb-3'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>

                </div>

            </div>
            <div className='flex justify-center pt-[10px]  bg-[#1A252F] w-full '>
                <p className='text-white mb-[10px] py-2'>Copyright © Your Website 2021</p>
            </div>

        </>
    )
}
