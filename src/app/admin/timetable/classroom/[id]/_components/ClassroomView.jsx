"use client";
import Link from 'next/link';
import React from 'react';
import { MdDeleteForever } from 'react-icons/md';



export default function ClassroomView() {
  return (
    <>

    {/* LINK */}
    <section className='mx-auto w-[96%] flex items-center justify-end mb-4 mt-4'>
      <Link href='/admin/timetable/classroom/edit/1' 
      className='px-4 py-2 link__second'>
        Edit
      </Link>
    </section>
    {/* TOP INFO */}
    <section className='mt-4 mx-auto w-[96%] mb-4'>
        <div className='w-[100%] bg-white drop-shadow-md p-6 col-span-4 text-lg'>
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

    </>
  )
}
