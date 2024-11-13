"use client";
import { AdminContextState } from '@/context/AdminContext';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoClose } from 'react-icons/io5';
import { MdDeleteForever } from 'react-icons/md';




export default function ClassroomEdit() {
  const { timetableState, timetableDispatch} = AdminContextState();



  return (
    <>
    <div className=''>
        {/* LINK */}
        <section className='mx-auto w-[96%] flex items-center justify-end mb-4 mt-4'>
          <Link href='/admin/timetable/classroom/1' 
          className='px-4 py-2 link__second'>
            View
          </Link>
        </section>

      {/* TOP INFO */}
      <section className='mt-4 mx-auto w-[96%]'>
        <div className='w-[100%] bg-white drop-shadow-md p-6 col-span-4'>
            {/* NAME */}
            <div className='w-[100%] flex items-center justify-start gap-4 mb-4'>
              <div className='font-lg font-light'>Classroom:</div>
              <div className='font-lg'>Name:</div>
            </div>
            {/* FORM / GRADE */}
            <div className='w-[100%] flex items-center justify-start gap-4'>
              <div className='font-lg font-light'>Form / Grade:</div>
              <div className='font-lg'>Form 1</div>
            </div>
        </div>
        
        
      </section>

      {/* COMPNENT */}
      
      <section className='mt-4 mx-auto w-[96%] bg-white drop-shadow-md p-6 mb-6'>
      {/*  */}
      <div className='w-[100%] grid lg:grid-cols-2 gap-4 grid-cols-1 mb-6'>
        <div className='w-[100%]'>
          <label className='font-lg font-light block pb-1'>Subject:</label>
          <select  
            name='subject_id' 
            placeholder='Enter Name here...' 
            className='transition-all ease-in-out border border-slate-300 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl'>
              <option value=''>Select an option.</option>
              {['Maths', 'English', 'Shona', 'History', 'Geography', 'Science'].map((a, key) => (
                <option value={a} key={key}>{a}</option>
              ))}
            </select>
        </div>
        <div className='w-[100%]'>
          <label className='font-lg font-light block pb-1'>Day:</label>
          <select  
            name='day' 
            placeholder='Enter Name here...' 
            className='transition-all ease-in-out border border-slate-300 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl'>
              <option value=''>Select an option.</option>
              {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((i, key) => (
                <option value={i} key={key}>{i}</option>
              ))}
            </select>
        </div>
    
      </div>
      {/*  */}
      <div className='w-[100%] grid lg:grid-cols-2 gap-4 grid-cols-1 mb-6'>
        <div className='w-[100%]'>
          <label className='font-lg font-light block pb-1'>Start Time:</label>
          <input  
            name='start_time'
            placeholder='Enter the Start Time here...' 
            className='transition-all ease-in-out border border-slate-300 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl' />
        </div>
        <div className='w-[100%]'>
          <label className='font-lg font-light block pb-1'>End Time:</label>
          <input  
            name='end_time' 
            placeholder='Enter the End Time here...' 
            className='transition-all ease-in-out border border-slate-300 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl' />
        </div>
      </div>
      
        <div className='w-[100%] flex items-center justify-center'>
          <button className='group rounded-2xl py-3 px-12 transition-all ease-in-out duration-200 bg-gradient-to-br from-green-500 to-blue-700 hover:drop-shadow-xl hover:bg-gradient-to-br hover:to-green-600 hover:from-blue-700'>
            <IoIosAddCircleOutline className='text-[1.8rem] group-hover:scale-110 text-white transition-all ease-in-out duration-200' />
          </button>
        </div>
      </section>
     
     

      {/* MAIN CONTENT */}
      <section className="w-[100%] lg:overflow-hidden overflow-scroll mb-[4rem]">
        <section className='lg:w-[100%] w-[60rem]'>
          {/* HEADER */}
          <div className='mx-auto w-[96%] text-lg py-2 flex items-center justify-start font-bold font-white bg-slate-200 '>
            <div className='w-[30%] border-r border-white px-3 py-2'>SUBJECT</div>
            <div className='w-[20%] border-r border-white px-3 py-2'>DAY</div>
            <div className='w-[20%] border-r border-white px-3 py-2'>START</div>
            <div className='w-[20%] border-r border-white px-3 py-2'>END</div>
            <div className='w-[10%] px-3 py-2 text-end'>ACTION</div>
          </div>
          {/* DETAILS */}
          {[...Array(5)].map((i, key) => (
            <div className='mx-auto w-[96%] bg-white py-2 flex items-center justify-start border border-slate-300 '>
              <div className='w-[30%] border-r border-slate-300 px-3 py-1'>NAME</div>
              <div className='w-[20%] border-r border-slate-300 px-3 py-1'>AUTHOR</div>
              <div className='w-[20%] border-r border-slate-300 px-3 py-1'>AUTHOR</div>
              <div className='w-[20%] border-r border-slate-300 px-3 py-1'>AUTHOR</div>
              <div className='w-[10%] px-3 py-1 text-xl flex items-center justify-end gap-2'> 
                <button title='Delete'> 
                    <MdDeleteForever
                      className='hover:text-red-500 duration-150 hover:scale-110 transition-all ease-in' /> 
                </button>    
              </div>
            </div>
          ))}
        </section>
      </section>

      


     {/*  <section className='mx-auto mt-6 w-[96%] flex items-center justify-center gap-4 mb-[4rem] '>
          <button className='group rounded-2xl py-3 px-12 transition-all ease-in-out duration-200 bg-gradient-to-br from-green-500 to-blue-700 hover:drop-shadow-xl hover:bg-gradient-to-br hover:to-green-600 hover:from-blue-700'>
          <IoIosAddCircleOutline className='text-[1.8rem] group-hover:scale-110 text-white transition-all ease-in-out duration-200' />
          </button>
          <button type='submit' className='group flex items-center justify-center gap-2 transition-all ease-in-out text-white px-12 py-4 rounded-xl hover:drop-shadow-xl bg-gradient-to-br from-cyan-500 to-blue-700 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-800'>
            Submit <FaArrowRightLong className='transition-all ease-in-out duration-200 group-hover:translate-x-1' />
          </button>
      </section> */}

    </div>

    </>
  )
}
