"use client";
import { formatDate } from '@/utils/formatDate';
import Link from 'next/link';
import React, { useState } from 'react';



export default function EventView({ dbData, id}) {
  const [data, setData] = useState(dbData?.data);

  return (
    <>
    {/* LINK */}
    <section className='w-[96%] mx-auto flex items-center justify-end my-6'>
      <Link href={`/admin/event/edit/${id}`} 
        className='px-4 py-2 link__second'>
        Edit
      </Link>
    </section>
    {/*  */}
    <section className='mx-auto w-[96%] text-lg bg-white drop-shadow-md px-6 py-8 mb-[4rem]'>
    {/*  */}
    <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
      <div className='md:w-[20%] w-[100%] font-light'>Name:</div>
      <div className='md:w-[80%] w-[100%]'>{data?.name}</div>
    </div>
    {/*  */}
    <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
      <div className='md:w-[20%] w-[100%] font-light'>Phone:</div>
      <div className='md:w-[80%] w-[100%]'>{data?.phone}</div>
    </div>
    {/*  */}
    <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
      <div className='md:w-[20%] w-[100%] font-light'>Venue:</div>
      <div className='md:w-[80%] w-[100%]'>{data?.venue}</div>
    </div>
    {/*  */}
    <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
      <div className='md:w-[20%] w-[100%] font-light'>Date:</div>
      <div className='md:w-[80%] w-[100%]'>{formatDate(data?.date)}</div>
    </div>
    {/*  */}
    <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
      <div className='md:w-[20%] w-[100%] font-light'>Start Time:</div>
      <div className='md:w-[80%] w-[100%]'>{data?.start_time + 'hrs'}</div>
    </div>
    {/*  */}
    <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
      <div className='md:w-[20%] w-[100%] font-light'>Start Time:</div>
      <div className='md:w-[80%] w-[100%]'>{data?.end_time + 'hrs'}</div>
    </div>
    {/*  */}
    <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
      <div className='md:w-[20%] w-[100%] font-light'>Description:</div>
      <div className='md:w-[80%] w-[100%]'>{data?.description}</div>
    </div>
  
    {/*  */}
    <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
      <div className='md:w-[20%] w-[100%] font-light'>Author:</div>
      <div className='md:w-[80%] w-[100%]'>{data?.user?.name ? data?.user?.name : data?.user?.email}</div>
    </div>
  
    </section>
    </>
  )
}
