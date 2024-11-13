"use client";
import React, { useState } from 'react'
import { FaArrowLeftLong, FaArrowRightLong, FaEye } from 'react-icons/fa6';
import { IoSearch } from "react-icons/io5";
import { MdDeleteForever, MdEdit, MdOutlineMoreVert } from "react-icons/md";
import { motion } from 'framer-motion';
import Link from 'next/link';
import ModalAdd from './ModalAdd';



export default function TeacherList() {
  const [isAdd, setIsAdd] = useState(false);


  return (
    <>
      {/* TOP */}
      <section className='w-[100%] mt-6 bg-white drop-shadow-md '>
        {/* SEARCH */}
        <div className='mx-auto w-[96%] flex items-center justify-between gap-4 py-3'>
          <form action='#' className='lg:w-[40%] flex items-center justify-start transition-all ease-in-out border border-slate-200 hover:border-slate-500 w-[100%] outline-none rounded-xl'>
            <input type='text' 
            className='w-[80%] px-3 py-3 rounded-l-xl outline-none'
            placeholder='Enter Name here...' />
            <button className='p-3 w-[20%] h-[100%] rounded-r-xl transition-all ease-in-out flex justify-center items-center border-l border-slate-200 hover:border-l hover:border-slate-500'>
              <IoSearch className='text-lg' />
            </button>
          </form>
          <div className='flex items-center justify-end gap-3'>
            {/* PAGINATION */}
            <section className='flex items-center justify-end gap-3'>
              {/* PREVIOUS */}
              <button className='group flex items-center justify-center gap-1 text-cyan-700 p-1'>
                <FaArrowLeftLong className='transition-all ease-in-out duration-200 group-hover:-translate-x-1' />
                Prev
              </button>
              {/* NEXT */}
              <button className='group flex items-center justify-center gap-1 text-cyan-700 p-1'>
                <span>Next</span>
                <FaArrowRightLong className='transition-all ease-in-out duration-200 group-hover:translate-x-1' />
              </button>
            </section>
            <button 
            onClick={() => setIsAdd(true)} 
            className='py-3 px-5 rounded-xl text-white transition-all ease-in-out duration-200 bg-gradient-to-br from-cyan-500 to-blue-600 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-700 hover:drop-shadow-md'>
              Add
            </button>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="w-[100%] lg:overflow-hidden overflow-scroll">
        <section className='lg:w-[100%] w-[60rem]'>
          {/* HEADER */}
          <div className='mx-auto w-[96%] text-lg py-2 flex items-center justify-start font-bold font-white bg-slate-200 '>
            <div className='w-[25%] border-r border-white px-3 py-2'>NAME</div>
            <div className='w-[15%] border-r border-white px-3 py-2'>ROLE</div>
            <div className='w-[20%] border-r border-white px-3 py-2'>PHONE</div>
            <div className='w-[10%] border-r border-white px-3 py-2'>GENDER</div>
            <div className='w-[20%] border-r border-white px-3 py-2'>AUTHOR</div>
            <div className='w-[10%] px-3 py-2'>ACTION</div>
          </div>
          {/* DETAILS */}
          {[...Array(12)].map((i, key) => (
            <div className='mx-auto w-[96%] bg-white py-2 flex items-center justify-start border border-slate-300 '>
              <div className='w-[25%] border-r border-slate-300 px-3 py-1'>NAME</div>
              <div className='w-[15%] border-r border-slate-300 px-3 py-1'>DESCRIPTION</div>
              <div className='w-[20%] border-r border-slate-300 px-3 py-1'>DESCRIPTION</div>
              <div className='w-[10%] border-r border-slate-300 px-3 py-1'>AUTHOR</div>
              <div className='w-[20%] border-r border-slate-300 px-3 py-1'>AUTHOR</div>
              <div className='w-[10%] px-3 py-1 text-xl flex items-center justify-center gap-2'>
                <Link title='View' href={`/admin/user/teacher/1`}> 
                  <FaEye className='hover:text-blue-500 duration-150 hover:scale-110 transition-all ease-in'/> 
                </Link>
                <Link title='Edit' href={`/admin/user/teacher/edit/1`}> 
                  <MdEdit className='hover:text-green-500 duration-150 hover:scale-110 transition-all ease-in' /> 
                </Link>  
                <button title='Delete'> 
                    <MdDeleteForever 
                      className='hover:text-red-500 duration-150 hover:scale-110 transition-all ease-in' /> 
                </button>
                
              </div>
            </div>
          ))}
        </section>
      </section>

      {/* PAGINATION */}
      <section className='mx-8 pt-8 pb-12 flex items-center justify-end gap-3'>
        {/* PREVIOUS */}
        <button className='group flex items-center justify-center gap-1 text-cyan-700'>
          <FaArrowLeftLong className='transition-all ease-in-out duration-200 group-hover:-translate-x-1' />
          Prev
        </button>
        {/* NEXT */}
        <button className='group flex items-center justify-center gap-1 text-cyan-700 '>
          <span>Next</span>
          <FaArrowRightLong className='transition-all ease-in-out duration-200 group-hover:translate-x-1' />
        </button>
      </section>

      {/* MODAL */}
      <ModalAdd isAdd={isAdd} setIsAdd={setIsAdd} />



    
    
    </>
  )
}
