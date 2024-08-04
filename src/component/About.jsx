/* eslint-disable no-unused-vars */
import React from 'react'

export default function About() {
    return (
        <>
            <div className='bg-[#1ABC9C] d-flex flex-column align-items-center justify-content-center text-center py-52'>
                <div className="text-center pt-4 text-white mb-[16px]" >
                    <h2 className="text-uppercase mb-3 fs-1 fw-bolder ">about component</h2>
                    <div className="d-flex align-items-center justify-content-center mb-3">
                        <div className="line me-3 bg-white" ></div>
                        <i className="fa-solid fa-star"></i>
                        <div className="line ms-3 bg-white" ></div>
                    </div>
                </div>
                <div className="container w-[70%]">
                    <div className="row g-5  text-white text-start">
                        <div className="col-md-6  "
                        ><p > Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization. </p>
                        </div>
                        <div className="col-md-6 ">
                            <p > Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization. </p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
