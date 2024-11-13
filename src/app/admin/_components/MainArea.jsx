"use client";
import Link from 'next/link'
import React from 'react'
import { FaAngleRight, FaArrowRightLong } from 'react-icons/fa6'



export default function MainArea() {
  return (
    <>
    
    <section className='px-8 pt-8 pb-12 grid grid-cols-3 gap-6'>
        {/* COL */}
        {[...Array(9)].map((i, key) => (
          <div key={key} className='border border-slate-300 transition-all ease-in-out duration-200 hover:drop-shadow-md bg-white py-6 px-4 flex flex-col items-center justify-center gap-3'>
            <h3 className='text-[2rem] leading-tight text-center'>Title Name</h3>
            <p className=''>Lorem ipsum dolor sit.</p>
            <button className='group flex items-center justify-center gap-2 bg-gradient-to-br from-cyan-500 to-blue-600 transition-all ease-in-out duration-150 hover:drop-shadow-lg text-white px-4 py-2 rounded-xl'>
              Click More <FaArrowRightLong className='transition-all ease-in-out duration-200 group-hover:translate-x-1' />
            </button>
          </div>
        ))}
    </section>

    </>
  )
}
