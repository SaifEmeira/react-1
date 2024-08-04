/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import photo1 from '../assets/poert1.png'
import photo2 from '../assets/port2.png'
import photo3 from '../assets/port3.png'
import Modal from './Modal'



export default function Portfolio() {


    let [open , setOpen] = useState(false);
    let [open2 , setOpen2] = useState(false);
    let [open3 , setOpen3] = useState(false);


    let [image,setImage]=useState("")


    function showModal(e) {

        image=e.currentTarget.getAttribute("src")
    console.log(image);
    setOpen(!open)
   
    
    
}
function showModal2(e) {

    image=e.currentTarget;
console.log(image);
setOpen2(!open2)



}
function showModal3(e) {

    image=e.currentTarget;
console.log(image);
setOpen3(!open3)



}






    return (
        <>
            <div className='bg-[#fff] d-flex flex-column align-items-center justify-content-center text-center py-16'>
                <div className="text-center  text-[#2C3E50] mb-[16px]" >
                    <h2 className="text-uppercase mb-3 fs-1 fw-bolder ">about component</h2>
                    <div className="d-flex align-items-center justify-content-center mb-3">
                        <div className="line me-3 bg-[#2C3E50]" ></div>
                        <i className="fa-solid fa-star"></i>
                        <div className="line ms-3 bg-[#2C3E50]" ></div>
                    </div>
                </div>
                <div className='container px-12'>
                    <div className='row g-4'>
                        <div className='col-lg-4 col-md-6'>
                            <div onClick={showModal}  className='rounded-3 overflow-hidden relative box'>
                                <img   src={photo1} className='w-full rounded-3' alt="" />
                                <div className="layer bg-[#19AB8E] opacity-0  position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6'>
                            <div onClick={showModal2} className='rounded-3 overflow-hidden relative box'>
                                <img src={photo2} className='w-full rounded-3' alt="" />
                                <div className="layer bg-[#19AB8E] opacity-0  position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6'>
                            <div onClick={showModal3} className='rounded-3 overflow-hidden relative box'>
                                <img src={photo3} className='w-full rounded-3' alt="" />
                                <div className="layer bg-[#19AB8E] opacity-0  position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6'>
                            <div onClick={showModal} className='rounded-3 overflow-hidden relative box'>
                                <img src={photo1} className='w-full rounded-3' alt="" />
                                <div className="layer bg-[#19AB8E] opacity-0  position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6'>
                            <div onClick={showModal2} className='rounded-3 overflow-hidden relative box'>
                                <img src={photo2} className='w-full rounded-3' alt="" />
                                <div className="layer bg-[#19AB8E] opacity-0  position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6'>
                            <div onClick={showModal3} className='rounded-3 overflow-hidden relative box'>
                                <img src={photo3} className='w-full rounded-3' alt="" />
                                <div className="layer bg-[#19AB8E] opacity-0  position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




                <div className={`modal ${open? "d-block":"d-none"} `}>
                    <div onClick={showModal} className='overlay'></div>
                    <div className='modal-content flex justify-center w-[50%] '>
                        <img src="/src/assets/poert1.png" className='w-full' alt="" />
                    </div>
                </div>



                <div className={`modal ${open2? "d-block":"d-none"} `}>
                    <div onClick={showModal2} className='overlay'></div>
                    <div className='modal-content flex justify-center w-[50%] '>
                        <img src="/src/assets/port2.png" className='w-full' alt="" />
                    </div>
                </div>

                <div className={`modal ${open3? "d-block":"d-none"} `}>
                    <div onClick={showModal3} className='overlay'></div>
                    <div className='modal-content flex justify-center w-[50%] '>
                        <img src="/src/assets/port3.png" className='w-full' alt="" />
                    </div>
                </div>

            </div>
        </>
    )
}
