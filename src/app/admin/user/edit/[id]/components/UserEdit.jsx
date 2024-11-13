"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'



export default function UserEdit() {
  const [image, setImage] = useState();


  return (
    <>
    <section className='mt-3 mx-auto w-[96%] bg-white drop-shadow-md px-6 py-4 mb-[4rem]'>
      {/* LINK */}
      <div className='flex items-center justify-end mb-4'>
        <Link href='/admin/user/1' 
        className='px-4 py-3 link__second'>
          View
        </Link>
      </div>
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
             {/* PARENT / GUARDIAN */}
            <div className='w-[100%] border-t border-slate-300 mb-4'>
                <h3 className='font-light text-[2rem]'>Parent or Guardian Info</h3>
            </div>
            {/* NAME & EMAIL */}
            <div className='w-[100%] mb-4 grid lg:grid-cols-2 grid-cols-1 gap-4'>
                <div className='w-[100%]'>
                    <p className='mb-2 font-light'>Parent or Guardian Name:</p>
                    <input 
                    type='text' 
                    name='parent_name'
                    placeholder='Enter Name here...'
                    className='transition-all ease-in-out border border-slate-300 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl' />
                </div>
                <div className='w-[100%]'>
                    <p className='mb-2 font-light'>Parent or Guardian Email:</p>
                    <input 
                    type='text' 
                    name='parent_email'
                    placeholder='Enter Email here...'
                    className='transition-all ease-in-out border border-slate-300 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl' />
                </div>
            </div>
            {/* PHONE & ADDRESS */}
            <div className='w-[100%] mb-4 grid lg:grid-cols-2 grid-cols-1 gap-4'>
                <div className='w-[100%]'>
                    <p className='mb-2 font-light'>Parent or Guardian Phone:</p>
                    <input 
                    type='text' 
                    name='parent_phone'
                    placeholder='Enter Phone here...'
                    className='transition-all ease-in-out border border-slate-300 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl' />
                </div>
                <div className='w-[100%]'>
                    <p className='mb-2 font-light'>Parent or Guardian Address:</p>
                    <input 
                    type='text' 
                    name='parent_address'
                    placeholder='Enter Address here...'
                    className='transition-all ease-in-out border border-slate-300 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl' />
                </div>
            </div>
            {/* GENDER & ID NUMBER */}
            <div className='w-[100%] mb-6 grid lg:grid-cols-2 grid-cols-1 gap-4'>
                <div className='w-[100%]'>
                    <p className='mb-2 font-light'>Parent or Guardian Gender:</p>
                    <select 
                    type='text' 
                    name='parent_gender'
                    placeholder='Enter Gender here...'
                    className='transition-all ease-in-out border border-slate-300 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl'>
                    <option value=''>Please an option.</option>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                    </select>
                </div>
                <div className='w-[100%]'>
                    <p className='mb-2 font-light'>Parent or Guardian Id Number:</p>
                    <input 
                    type='text' 
                    name='parent_id_number'
                    placeholder='Enter Id Number here...'
                    className='transition-all ease-in-out border border-slate-300 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl' />
                </div>
            </div>
            {/* BUTTON */}
            <div className='w-[100%] flex items-center justify-center mb-4'>
                <button type='submit' className='group flex items-center justify-center gap-1 transition-all ease-in-out text-white px-10 py-4 rounded-xl hover:drop-shadow-lg bg-gradient-to-br from-cyan-500 to-blue-700 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-800'>
                    Submit <FaArrowRightLong className='transition-all ease-in-out duration-200 group-hover:translate-x-1' />
                </button>
            </div>

    </section>
    </>
  )
}
