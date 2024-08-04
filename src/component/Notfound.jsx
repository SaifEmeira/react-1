/* eslint-disable no-unused-vars */
import React from 'react'
import error from '../assets/error.svg'

export default function Notfound() {
  return (
    <div className='flex flex-col justify-center text-center my-28'>
      <h2>NOT FOUND</h2>
      <img src={error} className='w-[350px] m-auto' alt="" />
    </div>
  )
}
