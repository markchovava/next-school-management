"use client";
import { baseURL } from '@/api/baseURL';
import Link from 'next/link'
import React, { useState, useTransition } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'



export default function ProfileEdit({dbData}) {
    const [isPending, startTransition] = useTransition();
    const [errMsg, setErrMsg] = useState({});
    const [image, setImage] = useState(dbData?.data?.image && baseURL + dbData?.data?.image);
    const [data, setData] = useState(dbData?.data);
    const handleInput = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }


    async function postData() {
        const formData = {
            image: data?.image,
            name: data?.name,
            phone: data?.phone,
            gender: data?.gender,
            dob: data?.dob,
            address: data?.address,
            gender: data?.gender,
            parent_name: data?.parent_name,
            parent_email: data?.parent_email,
            parent_phone: data?.parent_phone,
            parent_address: data?.parent_address,
            parent_gender: data?.parent_gender,
            parent_id_number: data?.parent_id_number,
        }
        startTransition(() => formData)
    }




  return (
    <>
    {/* LINK */}
    <section className='mx-auto w-[96%] flex items-center justify-end'>
        <Link href='/admin/profile' 
        className='px-4 my-4 py-2 link__second'>
          View
        </Link>
    </section>

    <section className='mt-3 mx-auto w-[96%] bg-white drop-shadow-md px-6 py-4 mb-[4rem]'>
        <form action={postData} >
            {/* Image */}
            <div className='w-[100%] mb-6'>
                    <label className='font-lg font-light block pb-1'>Image:</label>
                    <input type='file' name='image' 
                        onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
                        className='py-3  w-[50%] outline-none rounded-xl' />
                    <div className='relative w-[10rem] aspect-square rounded-full bg-slate-100 drop-shadow-md overflow-hidden'>
                        <div className='w-[100%] h-[100%] absolute z-10 flex items-center justify-center text-2xl text-slate-700'>No Image</div>
                        <img src={image} className='w-[100%] h-[100%] object-cover absolute z-20' />
                    </div>

            </div>
            {/* NAME & EMAIL */}
            <div className='w-[100%] mb-4 grid lg:grid-cols-2 grid-cols-1 gap-4'>
                <div className='w-[100%]'>
                    <p className='mb-2 font-light'>Name:</p>
                    <input 
                    type='text' 
                    name='name'
                    onChange={handleInput}
                    value={data?.name}
                    placeholder='Enter the Name here...'
                    className='transition-all ease-in-out border border-slate-300 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl' />
                </div>
                <div className='w-[100%] font-light'>
                    <p className='mb-2'>Email:</p>
                    <input 
                    type='text' 
                    name='email'
                    value={data?.email}
                    onChange={handleInput}
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
                    name='phone'
                    value={data?.phone}
                    onChange={handleInput}
                    placeholder='Enter Phone Number here...'
                    className='transition-all ease-in-out border border-slate-300 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl' />
                </div>
                <div className='w-[100%]'>
                    <p className='mb-2 font-light'>Address:</p>
                    <input 
                    type='text' 
                    name='address'
                    value={data?.address}
                    onChange={handleInput}
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
                    value={data?.dob}
                    onChange={handleInput}
                    placeholder='Enter Date of Birth here...'
                    className='transition-all ease-in-out border border-slate-300 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl' />
                </div>
                <div className='w-[100%]'>
                    <p className='mb-2 font-light'>Gender:</p>
                    <select 
                    type='text' 
                    name='gender'
                    onChange={handleInput}
                    className='transition-all ease-in-out border border-slate-300 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl'>
                    <option value=''>Select an option.</option>
                    <option value='Male' selected={data?.gender == 'Male' && 'selected'}>Male</option>
                    <option value='Female' selected={data?.gender == 'Female' && 'selected'}>Female</option>
                    </select>
                </div>
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
                    value={data?.parent_name}
                    onChange={handleInput}
                    placeholder='Parent / Guardian Name...'
                    className='transition-all ease-in-out border border-slate-300 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl' />
                </div>
                <div className='w-[100%]'>
                    <p className='mb-2 font-light'>Parent or Guardian Email:</p>
                    <input 
                    type='text' 
                    name='parent_email'
                    value={data?.parent_email}
                    onChange={handleInput}
                    placeholder='Enter Parent / Guardian Email here...'
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
                    value={data?.parent_phone}
                    onChange={handleInput}
                    placeholder='Enter Parent / Guardian Phone here...'
                    className='transition-all ease-in-out border border-slate-300 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl' />
                </div>
                <div className='w-[100%]'>
                    <p className='mb-2 font-light'>Parent or Guardian Address:</p>
                    <input 
                    type='text'
                    onChange={handleInput} 
                    value={data?.parent_address}
                    name='parent_address'
                    placeholder='Enter Parent / Guardian Address here...'
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
                    onChange={handleInput} 
                    placeholder='Enter Parent / Guardian Gender here...'
                    className='transition-all ease-in-out border border-slate-300 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl'>
                    <option value=''>Please an option.</option>
                    <option value='Male' selected={data?.student?.parent_gender == 'Male' && 'selected'}>Male</option>
                    <option value='Female' selected={data?.student?.parent_gender == 'Female' && 'selected'}>Female</option>
                    </select>
                </div>
                <div className='w-[100%]'>
                    <p className='mb-2 font-light'>Parent or Guardian Id Number:</p>
                    <input 
                    type='text' 
                    name='parent_id_number'
                    value={data?.parent_id_number}
                    onChange={handleInput} 
                    placeholder='Enter Parent or Guardian Id Number here...'
                    className='transition-all ease-in-out border border-slate-300 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl' />
                </div>
            </div>
            {/* BUTTON */}
            <div className='w-[100%] flex items-center justify-center mb-4'>
                <button type='submit' className='group flex items-center justify-center gap-2 transition-all ease-in-out text-white px-10 py-4 rounded-xl hover:drop-shadow-lg bg-gradient-to-br from-cyan-500 to-blue-700 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-800'>
                    {isPending ? 'Processing' : 
                    <>
                    Submit <FaArrowRightLong className='transition-all ease-in-out duration-200 group-hover:translate-x-1' />
                    </>}
                </button>
            </div>
        </form>

    </section>
    </>
  )
}
