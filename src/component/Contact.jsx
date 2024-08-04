/* eslint-disable no-unused-vars */
import React from 'react'
import { useFormik } from 'formik'


export default function Contact() {





    let formik = useFormik({
        initialValues: {
            name: '',
            age: '',
            password: "",
            email: '',

        },


    })



    return (
        <div>
            <div className='bg-[#fff] d-flex flex-column align-items-center justify-content-center text-center py-16'>
                <div className="text-center  text-[#2C3E50] mb-[16px]" >
                    <h2 className="text-uppercase mb-3 fs-1 fw-bolder ">about component</h2>
                    <div className="d-flex align-items-center justify-content-center mb-3">
                        <div className="line me-3 bg-[#2C3E50]" ></div>
                        <i className="fa-solid fa-star"></i>
                        <div className="line ms-3 bg-[#2C3E50]" ></div>
                    </div>
                </div>

                <form action="" className='w-50 p-3 mx-auto mt-5 ' onSubmit={formik.handleSubmit}>
                    <label id='label' htmlFor="name" className={`position-relative flex text-[#1ABC9C] justify-start ms-[11px]  ${formik.values.name ? " top-0 " : 'top-10 '}  `}>userName : </label>
                    <input id="name" onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} type="text" placeholder="userName" className=" w-full ps-2 bg-white focus:outline-none border-0 border-bottom rounded py-3 position-relative "></input>

                    <label id='label' htmlFor="age" className={`position-relative flex text-[#1ABC9C] justify-start ms-[11px]  ${formik.values.age ? " translate-y-0 " : 'translate-y-10 '}  `}>userAge : </label>
                    <input id="age" onChange={formik.handleChange} value={formik.values.age} onBlur={formik.handleBlur} type="text" placeholder="userAge" className=" w-full ps-2 bg-white rounded focus:outline-none border-0 border-bottom py-3 position-relative "></input>


                    <label id='label' htmlFor="email" className={`position-relative flex text-[#1ABC9C] justify-start ms-[11px]  ${formik.values.email ? " translate-y-0 " : 'translate-y-10 '}  `}>userEmail : </label>
                    <input id="email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} type="text" placeholder="userEmail" className=" w-full ps-2 bg-white rounded focus:outline-none border-0 border-bottom py-3 position-relative "></input>



                    <label id='label' htmlFor="password" className={`position-relative flex text-[#1ABC9C] justify-start ms-[11px]  ${formik.values.password ? " translate-y-0 " : 'translate-y-10 '}  `}>userPassword : </label>
                    <input id="password" onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} type="text" placeholder="userPassword" className="w-full ps-2 rounded bg-white focus:outline-none border-0 border-bottom py-3 position-relative "></input>

                    <button className='  mt-4 text-white flex justify-start bg-[#1abc9c]'>Send Message</button>
                </form>





            </div>
        </div>
    )
}
