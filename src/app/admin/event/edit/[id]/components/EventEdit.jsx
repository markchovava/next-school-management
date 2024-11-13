"use client";
import { eventUpdateApiAction } from '@/actions/eventActions';
import { reactToastifyDark } from '@/utils/reactToastify';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState, useTransition } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { toast } from 'react-toastify';



export default function EventEdit({dbData, id}) {
  const router = useRouter();
  const [data, setData] = useState(dbData?.data);
  const [errMsg, setErrMsg] = useState({});
  const [isPending, startTransition] = useTransition();
  const handleInput = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  async function postData() {
    if(!data.name) {
        const message = 'Name is required.'
        setErrMsg({name: message});
        toast.warn(message, reactToastifyDark);
        return;
    }
    if(!data.venue) {
        const message = 'Venue is required.'
        setErrMsg({venue: message});
        toast.warn(message, reactToastifyDark);
        return;
    }
    if(!data.date) {
        const message = 'Date is required.'
        setErrMsg({date: message});
        toast.warn(message, reactToastifyDark);
        return;
    }
    const formData = new FormData()
    formData.append('name', data?.name);
    formData.append('phone', data?.phone);
    formData.append('description', data?.description);
    formData.append('venue', data?.venue);
    formData.append('date', data?.date);
    formData.append('start_time', data?.start_time);
    formData.append('end_time', data?.end_time);
    
    try{
        const res = await eventUpdateApiAction(formData, id);
        startTransition(() => res)
        if(res.status == 1) {
            toast.success(res.message, reactToastifyDark);
            setErrMsg({});
            router.push(`/admin/event/${id}`)
            return;
        }
        } catch (error) {
            console.error(`Error: ${error}`);
    }
}


  return (
    <>
      {/* LINK */}
      <section className='mx-auto w-[96%] flex items-center justify-end my-6'>
        <Link href={`/admin/event/${id}`}
        className='px-4 py-2 link__second'>
          View
        </Link>
      </section>
    <section className='mt-3 mx-auto w-[96%] bg-white drop-shadow-md px-6 py-4 mb-[4rem]'>
      <form action={postData}>
                {/* NAME */}
                <div className='w-[100%] mb-6'>
                    <p className='mb-2'>Name:</p>
                    <input 
                    type='text' 
                    name='name'
                    onChange={handleInput}
                    value={data?.name}
                    placeholder='Enter the Name here...'
                    className='transition-all ease-in-out border border-slate-300 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl' />
                    {errMsg.name && 
                      <div className='text-red-600 text-sm'>{errMsg.name}</div> 
                    }
                </div>
                {/* PHONE & DATE */}
                <div className='w-[100%] mb-6 grid lg:grid-cols-2 grid-cols-1 gap-4'>
                    <div className='w-[100%]'>
                        <p className='mb-2'>Phone Number:</p>
                        <input 
                        type='text' 
                        name='phone'
                        onChange={handleInput}
                        value={data?.phone}
                        placeholder='Enter the Phone here...'
                        className='transition-all ease-in-out border border-slate-300 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl' />
                    </div>
                    <div className='w-[100%]'>
                        <p className='mb-2'>Date:</p>
                        <input 
                        type='date' 
                        name='date'
                        onChange={handleInput}
                        value={data?.date}
                        placeholder='Enter Date here...'
                        className='transition-all ease-in-out border border-slate-300 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl' />
                      {errMsg.date && 
                      <div className='text-red-600 text-sm'>{errMsg.date}</div> 
                    }
                    </div>
                </div>
                {/* START TIME & END TIME */}
                <div className='w-[100%] mb-6 grid lg:grid-cols-2 grid-cols-1 gap-4'>
                    <div className='w-[100%]'>
                        <p className='mb-2'>Starting Time:</p>
                        <input 
                        type='time' 
                        name='start_time'
                        onChange={handleInput}
                        value={data?.start_time}
                        placeholder='Enter the Name here...'
                        className='transition-all ease-in-out border border-slate-300 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl' />
                    </div>
                    <div className='w-[100%]'>
                        <p className='mb-2'>Ending Time:</p>
                        <input 
                        type='time' 
                        name='end_time'
                        onChange={handleInput}
                        value={data?.end_time}
                        placeholder='Enter the Ending Time here...'
                        className='transition-all ease-in-out border border-slate-300 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl' />
                    </div>
                </div>
                {/* VENUE */}
                <div className='w-[100%] mb-6'>
                    <p className='mb-2'>Venue:</p>
                    <input 
                    type='text' 
                    name='venue'
                    onChange={handleInput}
                    value={data?.venue}
                    placeholder='Enter the Venue here...'
                    className='transition-all ease-in-out border border-slate-300 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl' />
                    {errMsg.venue && 
                      <div className='text-red-600 text-sm'>{errMsg.venue}</div> 
                    }
                </div>
                {/* DESCRIPTION */}
                <div className='w-[100%] mb-6'>
                    <p className='mb-2'>Description:</p>
                    <textarea 
                    name='description'
                    onChange={handleInput}
                    value={data?.description}
                    placeholder='Enter the Description here...'
                    className='h-[8rem] transition-all ease-in-out border border-slate-300 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl'></textarea>
                </div>
                {/* SUBMIT */}
                <div className='w-[100%] flex items-center justify-center mb-4'>
                    <button type='submit' 
                    className='group flex items-center justify-center gap-2 transition-all ease-in-out text-white px-10 py-4 rounded-xl hover:drop-shadow-lg bg-gradient-to-br from-cyan-500 to-blue-700 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-800'>
                    { isPending ? 'Processing'
                        : <> Submit 
                        <FaArrowRightLong 
                        className='transition-all ease-in-out duration-200 group-hover:translate-x-1' />
                        </> 
                    }
                    </button>
                </div>
      </form>
    </section>
    </>
  )
}
