/* eslint-disable no-unused-vars */
import React from 'react'

export default function Modal(show , open) {
   
  return (
    <div>
      <div className={`modal ${open? "d-block":"d-none"} `}>
                    <div onClick={show} className='overlay'></div>
                    <div className='modal-content flex justify-center w-[50%] '>
                        {/* <img src= className='w-full' alt="" /> */}
                    </div>
                </div>
    </div>
  )
}
