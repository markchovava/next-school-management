"use client";
import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';


const contentVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1,
        transition: {
            type: 'spring',
            duration: 1, }},
}


export default function ModalAdd({isAdd, setIsAdd}) {
    const [image, setImage] = useState();


  return (
    <>
    {/* MODAL */}
    <AnimatePresence>
        {isAdd && 
        <motion.section
        variants={contentVariant}
        initial='hidden'
        animate='visible'
        exit='hidden'
        className='w-[100vw] h-[100vh] fixed top-0 left-0 z-50 overflow-hidden'>
        <div className='absolute z-0 top-0 left-0 w-[100%] h-[100%] bg-black opacity-40'></div>
        <div className='w-[100%] h-[100%]  absolute z-10 overflow-auto scroll__width py-[6rem]'>
         {/*  */}   
        <section className='mx-auto w-[70%] h-auto bg-white text-black p-6 rounded-2xl'>
            <div className='flex items-center justify-end'>
                <button onClick={() => setIsAdd(false)} className='hover:text-red-600 transition-all ease-in-out duration-200'>
                    <IoClose className='text-2xl' />
                </button>
            </div>
            <h3 className='text-[2.2rem] font-light text-center mb-3'>Add User</h3>
            {/* Image */}
            <div className='w-[100%] mb-4'>
                <label className='font-lg font-light block pb-1'>Image:</label>
                <input type='file' name='image' 
                    onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
                    className='py-3  w-[50%] outline-none rounded-xl' />
                <div className='h-[10rem] aspect-[5/3] bg-slate-50 drop-shadow-lg overflow-hidden'>
                    <img src={image} className='w-[100%] h-[100%] object-cover' />
                </div>
            </div>
            {/* NAME & EMAIL */}
            <div className='w-[100%] mb-4 grid lg:grid-cols-2 grid-cols-1 gap-4'>
                <div className='w-[100%]'>
                    <p className='mb-2 font-light'>Name:</p>
                    <input 
                    type='text' 
                    name='name'
                    placeholder='Enter the Name here...'
                    className='transition-all ease-in-out border border-slate-300 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl' />
                </div>
                <div className='w-[100%] font-light'>
                    <p className='mb-2'>Email:</p>
                    <input 
                    type='text' 
                    name='name'
                    placeholder='Enter the Email here...'
                    className='transition-all ease-in-out border border-slate-300 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl' />
                </div>
            </div>
            {/* PHONE & ADDRESS */}
            <div className='w-[100%] mb-4 grid lg:grid-cols-2 grid-cols-1 gap-4'>
                <div className='w-[100%]'>
                    <p className='mb-2 font-light'>Phone:</p>
                    <input 
                    type='text' 
                    name='dob'
                    placeholder='Enter Phone Number here...'
                    className='transition-all ease-in-out border border-slate-300 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl' />
                </div>
                <div className='w-[100%]'>
                    <p className='mb-2 font-light'>Address:</p>
                    <input 
                    type='text' 
                    name='address'
                    placeholder='Enter Address here...'
                    className='transition-all ease-in-out border border-slate-300 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl' />
                </div>
            </div>
            {/* DOB & GENDER */}
            <div className='w-[100%] mb-4 grid lg:grid-cols-2 grid-cols-1 gap-4'>
                <div className='w-[100%]'>
                    <p className='mb-2 font-light'>Date of Birth:</p>
                    <input 
                    type='date' 
                    name='dob'
                    placeholder='Enter Date of Birth here...'
                    className='transition-all ease-in-out border border-slate-300 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl' />
                </div>
                <div className='w-[100%]'>
                    <p className='mb-2 font-light'>Gender:</p>
                    <select 
                    type='text' 
                    name='gender'
                    className='transition-all ease-in-out border border-slate-300 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl'>
                    <option value=''>Select an option.</option>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                    </select>
                </div>
            </div>
            {/* ROLE */}
            <div className='w-[100%] mb-8'>
                <p className='mb-2 font-light'>Role:</p>
                <select 
                name='role_id' 
                className='transition-all ease-in-out border border-slate-300 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl'>
                    <option value=''>Select an option.</option>
                    {['Admin', 'Teacher', 'Student'].map((i, key) => (
                    <option value={key+1}>{i}</option>
                    ))}
                </select>
            </div>
            {/* BUTTON */}
            <div className='w-[100%] flex items-center justify-center mb-4'>
                <button type='submit' className='group flex items-center justify-center gap-1 transition-all ease-in-out text-white px-10 py-4 rounded-xl hover:drop-shadow-lg bg-gradient-to-br from-cyan-500 to-blue-700 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-800'>
                    Submit <FaArrowRightLong className='transition-all ease-in-out duration-200 group-hover:translate-x-1' />
                </button>
            </div>
        </section>
        </div>
        </motion.section>
        }
    </AnimatePresence>
    </>
  )
}
