"use client";
import { appInfoStoreApiAction } from '@/actions/appInfoActions';
import { baseURL } from '@/api/baseURL';
import { reactToastifyDark } from '@/utils/reactToastify';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState, useTransition } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { toast } from 'react-toastify';



export default function AppInfoEdit({ dbData }) {
  //console.log(baseURL + dbData?.data?.image);
  const router = useRouter();
  const [errMsg, setErrMsg] = useState({});
  const [isSubmit, setIsSubmit] = useState(false)
  const [image, setImage] = useState(dbData?.data?.image && baseURL + dbData?.data?.image);
  const [data, setData] = useState(dbData?.data);
  function handleInput(e){
    setData({...data, [e.target.name]: e.target.value})
  }


  async function postData() {
    if(!data?.name) {
      const message = 'Name is required.'
      toast.warn(message, reactToastifyDark);
      setErrMsg({name: message})
      setIsSubmit(false);
      return;
    }
    if(!data?.website) {
      const message = 'Website is required.'
      toast.warn(message, reactToastifyDark);
      setErrMsg({website: message});
      setIsSubmit(false);
      return;
    }
    const formData = new FormData();
    formData.append('name', data?.name)
    formData.append('image', data?.image)
    formData.append('phone', data?.phone)
    formData.append('address',  data?.address)
    formData.append('email', data?.email)
    formData.append('website', data?.website)
   

    try{
      const res = await appInfoStoreApiAction(formData);
      if(res.status == 1) {
          toast.success(res.message, reactToastifyDark);
          setErrMsg({});
          setIsSubmit(false);
          router.push(`/admin/app-info`);
          return;
      }
      setErrMsg({});
      } catch (error) {
          console.error(`Error: ${error}`); 
    }
  }
  
  
  return (
    <>
    {/* LINK */}
    <section className='mx-auto w-[96%] flex items-center justify-end my-6'>
        <Link href='/admin/app-info' 
        className='px-4 py-2 link__second'>
          View
        </Link>
    </section>
    {/*  */}
    <section className='mt-3 mb-[4rem] mx-auto w-[96%] bg-white drop-shadow-md px-6 py-4'>
      <form action={postData}>
        {/* IMAGE */}
        <div className='w-[100%] mb-4'>
          <label className='font-lg font-light block pb-1'>Image:</label>
          <input type='file' name='image' 
            onChange={(e) => {
              setImage(URL.createObjectURL(e.target.files[0]));
              setData({...data, image: e.target.files[0]});
            }}
            className='py-3  w-[50%] outline-none rounded-xl' />
          <div className='h-[10rem] aspect-[5/3] bg-slate-50 drop-shadow-lg overflow-hidden rounded-xl'>
            <img src={image} className='w-[100%] h-[100%] object-cover' />
          </div>
        </div>
        {/* NAME */}
        <div className='w-[100%] mb-4'>
          <label className='font-lg font-light block pb-1'>Name:</label>
          <input type='text' 
            name='name' 
            onChange={handleInput}
            value={data?.name}
            placeholder='Enter Name here...' 
            className='transition-all ease-in-out border border-slate-300 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl' />
          { errMsg?.name && 
            <div className='text-sm text-red-600'>{errMsg.name}</div> }
        </div>
        {/* PHONE */}
        <div className='w-[100%] mb-4 grid lg:grid-cols-2 grid-cols-1 gap-4'>
          <div className='w-[100%]'>
            <label className='font-lg font-light block pb-1'>Phone:</label>
            <input type='text' 
              name='phone' 
              onChange={handleInput}
              value={data?.phone}
              placeholder='Enter Name here...' 
              className='transition-all ease-in-out border border-slate-300 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl' />
          </div>
          <div className='w-[100%]'>
            <label className='font-lg font-light block pb-1'>Email:</label>
            <input type='text' 
              name='email' 
              value={data?.email}
              onChange={handleInput}
              placeholder='Enter Name here...' 
              className='transition-all ease-in-out border border-slate-300 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl' />
          </div>
        </div>
        {/* ADDRESS */}
        <div className='w-[100%] mb-4'>
          <label className='font-lg font-light block pb-1'>Address:</label>
          <input type='text' 
            name='address' 
            value={data?.address}
            onChange={handleInput}
            placeholder='Enter Address here...' 
            className='transition-all ease-in-out border border-slate-300 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl' />
        </div>
        {/* WEBSITE */}
        <div className='w-[100%] mb-6'>
          <label className='font-lg font-light block pb-1'>Website:</label>
          <input type='text' 
            name='website' 
            value={data?.website}
            onChange={handleInput}
            placeholder='Enter Address here...' 
            className='transition-all ease-in-out border border-slate-300 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl' />
          { errMsg?.website && 
            <div className='text-sm text-red-600'>{errMsg.website}</div> }
        </div>
        {/* SUBMIT */}
        <div className='w-[100%] flex items-center justify-center mb-4'>
          <button type='submit' className='group flex items-center justify-center gap-1 transition-all ease-in-out text-white px-10 py-4 rounded-xl hover:drop-shadow-lg bg-gradient-to-br from-cyan-500 to-blue-700 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-800'>
            {isSubmit ? 'Processing' :
            <>
              Submit 
              <FaArrowRightLong className='transition-all ease-in-out duration-200 group-hover:translate-x-1' />
            </> 
            }
          </button>
        </div>
      </form>
    </section>
    </>
  )
}
