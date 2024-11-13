"use client";
import { baseURL } from '@/api/baseURL';
import Link from 'next/link'
import React, { useState } from 'react'



export default function AppInfoView({ dbData }) {
  const [data, setData] = useState(dbData?.data);


  return (
    <>
    {/* LINK */}
    <section className='mx-auto w-[96%] flex items-center justify-end my-6'>
      <Link href='/admin/app-info/edit' 
      className='px-4 py-2 link__second'>
        Edit
      </Link>
    </section>
    <section className=' mb-[4rem] mx-auto w-[96%] bg-white drop-shadow-md p-6'>
    {/*  */}
    {data?.image &&
    <div className='w-[100%] mb-4 flex md:flex-row flex-col items-start justify-start gap-1'>
      <div className='md:w-[20%] w-[100%] font-light pt-2'>Image:</div>
      <div className='md:w-[80%] w-[100%]'>
        <div className='h-[10rem] aspect-[5/3] bg-slate-50 overflow-hidden rounded-2xl drop-shadow-lg'>
        <img className='w-[100%] h-[100%]' src={baseURL + data.image} alt='Image' />
        </div>
      </div>
    </div>
    }
    {/* NAME */}
    <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
      <div className='md:w-[20%] w-[100%] font-light'>Name:</div>
      <div className='md:w-[80%] w-[100%]'>{data?.name}</div>
    </div>
    {/* PHONE */}
    <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
      <div className='md:w-[20%] w-[100%] font-light'>Phone:</div>
      <div className='md:w-[80%] w-[100%]'>{data?.phone}</div>
    </div>
    {/* ADDRESS */}
    <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
      <div className='md:w-[20%] w-[100%] font-light'>Address:</div>
      <div className='md:w-[80%] w-[100%]'>{data?.address}</div>
    </div>
    {/* EMAIL */}
    <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
      <div className='md:w-[20%] w-[100%] font-light'>Email:</div>
      <div className='md:w-[80%] w-[100%]'>{data?.email}</div>
    </div>
    {/* WEBSITE */}
    <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
      <div className='md:w-[20%] w-[100%] font-light'>Website:</div>
      <div className='md:w-[80%] w-[100%]'>{data?.website}</div>
    </div>
    {/* AUTHOR */}
    {data?.user?.email &&
    <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
      <div className='md:w-[20%] w-[100%] font-light'>Author:</div>
      <div className='md:w-[80%] w-[100%]'>{ data?.user?.name ? data?.user?.name : data?.user?.email }</div>
    </div>
    }
    </section>
    </>
  )
}
