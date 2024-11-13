"use client";
import Link from 'next/link';
import React, { useState } from 'react';



export default function ProfileView({dbData}) {
    const [data, setData] = useState(dbData?.data);

  return (
    <>
    {/* LINK */}
    <section className='mx-auto w-[96%] flex items-center justify-end'>
        <Link href='/admin/profile/edit' 
        className='px-4 my-4 py-2 link__second'>
          Edit
        </Link>
    </section>
    <section className='mx-auto w-[96%] bg-white drop-shadow-md p-6 mb-[4rem]'>
      {/* TITLE */}
      <div className='w-[100%] mb-4'>
          <h3 className='font-light text-[2rem]'>Profile Info</h3>
      </div>
      {/* Image */}
      <div className='w-[100%] mb-6 flex md:flex-row flex-col items-center justify-start gap-1'>
        <div className='md:w-[20%] w-[100%] font-light'>Image:</div>
        <div className='md:w-[80%] w-[100%]'>
            <div className='relative w-[10rem] overflow-hidden aspect-square rounded-full text-slate-700 font-light bg-slate-100 drop-shadow-md'>
                <div className='absolute z-10 w-[100%] h-[100%] flex justify-center items-center text-2xl'>
                No Image
                </div>
                <div className='absolute z-20 w-[100%] h-[100%] overflow-hidden'>
                    <img />
                </div>
            </div>
        </div>
      </div>
      {/* NAME */}
      <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
        <div className='md:w-[20%] w-[100%] font-light'>Name:</div>
        <div className='md:w-[80%] w-[100%]'>{data?.name}</div>
      </div>
      {/* TEACHER */}
      <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
        <div className='md:w-[20%] w-[100%] font-light'>Classroom:</div>
        <div className='md:w-[80%] w-[100%]'>{data?.classroom?.name}</div>
      </div>
      {/* TEACHER */}
      <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
        <div className='md:w-[20%] w-[100%] font-light'>Role:</div>
        <div className='md:w-[80%] w-[100%]'>{data?.role?.name}</div>
      </div>
      {/* EMAIL */}
      <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
        <div className='md:w-[20%] w-[100%] font-light'>Email:</div>
        <div className='md:w-[80%] w-[100%]'>{data?.email}</div>
      </div>
      {/* PHONE */}
      <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
        <div className='md:w-[20%] w-[100%] font-light'>Phone Number:</div>
        <div className='md:w-[80%] w-[100%]'>{data?.phone}</div>
      </div>
      {/* ADDRESS */}
      <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
        <div className='md:w-[20%] w-[100%] font-light'>Address:</div>
        <div className='md:w-[80%] w-[100%]'>{data?.address}</div>
      </div>
      {/* GENDER */}
      <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
        <div className='md:w-[20%] w-[100%] font-light'>Gender:</div>
        <div className='md:w-[80%] w-[100%]'>{data?.gender}</div>
      </div>
      {/* DATE OF BIRTH */}
      <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
        <div className='md:w-[20%] w-[100%] font-light'>Date of Birth:</div>
        <div className='md:w-[80%] w-[100%]'>{data?.dob}</div>
      </div>
      {/* BUTTON */}
      <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
        <div className='md:w-[20%] w-[100%] font-light'>Code:</div>
        <div className='md:w-[80%] w-[100%]'>{data?.code}</div>
      </div>
   
    </section>
    </>
  )
}
