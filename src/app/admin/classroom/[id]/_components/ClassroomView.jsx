"use client";
import Link from 'next/link';
import React, { useState } from 'react';



export default function ClassroomView({ dbData }) {
  const [data, setData] = useState(dbData?.data);



  return (
    <>
    {/* LINK */}
    <section className='w-[96%] mx-auto flex items-center justify-end my-6'>
      <Link href={`/admin/classroom/edit/${data?.id}`} 
        className='px-4 py-2 link__second'>
        Edit
      </Link>
    </section>
    <section className='mx-auto w-[96%] text-lg bg-white drop-shadow-md py-8 px-6'>
    {/*  */}
    <div className='w-[100%] mb-6 flex md:flex-row flex-col items-center justify-start gap-1'>
      <div className='md:w-[20%] w-[100%] font-light'>Name:</div>
      <div className='md:w-[80%] w-[100%]'>{data?.name}</div>
    </div>
   
    {/*  */}
    <div className='w-[100%] flex md:flex-row flex-col items-center justify-start gap-1'>
      <div className='md:w-[20%] w-[100%] font-light'>Author:</div>
      <div className='md:w-[80%] w-[100%]'>{ data?.user?.name ? data?.user?.name : data?.user?.email }</div>
    </div>
  
    </section>
    </>
  )
}
