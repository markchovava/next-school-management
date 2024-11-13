"use client";
import { eventStoreApiAction } from '@/actions/eventActions';
import { reactToastifyDark } from '@/utils/reactToastify';
import { motion, AnimatePresence } from 'framer-motion';
import React, { useState, useTransition } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';
import { toast } from 'react-toastify';


const contentVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1,
        transition: {
            type: 'spring',
            duration: 1, }},
}


export default function ModalAdd({isModal, setIsModal, getData}) {
    const [isPending, startTransition] = useTransition();
    const [data, setData] = useState({});
    const [errMsg, setErrMsg] = useState({});
    const handleInput = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }

    async function postData() {
        if(!data.name) {
            const message = 'Name is required.'
            setErrMsg({name: message});
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

        console.log(data);
        
        try{
            const res = await eventStoreApiAction(formData);
            startTransition(() => res)
            if(res.status == 1) {
                toast.success(res.message, reactToastifyDark);
                await getData();
                setData({});
                setIsModal(false);
                setErrMsg({});
                return;
            }
            } catch (error) {
                console.error(`Error: ${error}`);
        }
    }
    


  return (
    <>
    {/* MODAL */}
    <AnimatePresence>
        {isModal && 
        <motion.section
        variants={contentVariant}
        initial='hidden'
        animate='visible'
        exit='hidden'
        className='w-[100vw] h-[100vh] fixed top-0 left-0 z-50 overflow-hidden'>
        <div className='absolute z-0 top-0 left-0 w-[100%] h-[100%] bg-black opacity-40'></div>
        {/*  */}
        <div className='w-[100%] h-[100%] absolute z-10 overflow-auto scroll__width py-[6rem]'>
        <section className='mx-auto w-[70%] bg-white text-black p-6 rounded-2xl'>
            <div className='flex items-center justify-end'>
            <button onClick={() => setIsModal(false)} className='hover:text-red-600 transition-all ease-in-out duration-200'>
                <IoClose className='text-2xl' />
            </button>
            </div>
            <h3 className='text-[2rem] font-light text-center mb-6'>Add Event</h3>
            <form action={postData}>
                {/* NAME */}
                <div className='w-[100%] mb-6'>
                    <p className='mb-2'>Name:</p>
                    <input 
                    type='text' 
                    name='name'
                    onChange={handleInput}
                    placeholder='Enter the Name here...'
                    className='transition-all ease-in-out border border-slate-300 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl' />
                </div>
                {/* PHONE & DATE */}
                <div className='w-[100%] mb-6 grid lg:grid-cols-2 grid-cols-1 gap-4'>
                    <div className='w-[100%]'>
                        <p className='mb-2'>Phone Number:</p>
                        <input 
                        type='text' 
                        name='phone'
                        onChange={handleInput}
                        placeholder='Enter the Name here...'
                        className='transition-all ease-in-out border border-slate-300 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl' />
                    </div>
                    <div className='w-[100%]'>
                        <p className='mb-2'>Date:</p>
                        <input 
                        type='date' 
                        name='date'
                        onChange={handleInput}
                        placeholder='Enter Phone Number here...'
                        className='transition-all ease-in-out border border-slate-300 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl' />
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
                        placeholder='Enter the Name here...'
                        className='transition-all ease-in-out border border-slate-300 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl' />
                    </div>
                    <div className='w-[100%]'>
                        <p className='mb-2'>Ending Time:</p>
                        <input 
                        type='time' 
                        name='end_time'
                        onChange={handleInput}
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
                    placeholder='Enter the Venue here...'
                    className='transition-all ease-in-out border border-slate-300 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl' />
                </div>
                {/* DESCRIPTION */}
                <div className='w-[100%] mb-6'>
                    <p className='mb-2'>Description:</p>
                    <textarea 
                    name='description'
                    onChange={handleInput}
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
        </div>
        </motion.section>
        }
    </AnimatePresence>
    </>
  )
}
