"use client";
import { paymentUpdateApiAction } from '@/actions/paymentActions';
import { reactToastifyDark } from '@/utils/reactToastify';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState, useTransition } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { toast } from 'react-toastify';



export default function PaymentEdit({ dbData, id}) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const [data, setData] = useState(dbData?.data);
    const [errMsg, setErrMsg] = useState({});
    const handleInput = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    async function postData() {
      if(!data.name) {
          const message = 'Name is required.'
          setErrMsg({name: message});
          toast.warn(message, reactToastifyDark);
          return;
      }
      if(!data.amount) {
          const message = 'Amount is required.'
          setErrMsg({amount: message});
          toast.warn(message, reactToastifyDark);
          return;
      }
      const formData = new FormData()
      formData.append('name', data?.name);
      formData.append('amount', data?.amount);
      formData.append('description', data?.description ?? '');
      try{
          const res = await paymentUpdateApiAction(formData, id);
          startTransition(() => res)
          if(res.status == 1) {
              toast.success(res.message, reactToastifyDark);
              setErrMsg({});
              router.push(`/admin/payment/${id}`)
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
      <Link href={`/admin/payment/${id}`} 
      className='px-4 py-2 link__second'>
        View
      </Link>
    </section>
    <section className='mt-3 mx-auto w-[96%] bg-white drop-shadow-md px-6 py-4 mb-[4rem]'>
      <form action={postData}>
        {/* NAME */}
        <div className='w-[100%] mb-4'>
            <p className='mb-2 font-light'>Name:</p>
            <input 
            type='text' 
            name='name'
            value={data?.name}
            onChange={handleInput}
            placeholder='Enter the Name here...'
            className='transition-all ease-in-out border border-slate-300 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl' />
            { errMsg.name &&
                <div className='text-red-500 text-sm'>{errMsg.name}</div>
            }
        </div>
        {/* AMOUNT */}
        <div className='w-[100%] mb-4'>
            <p className='mb-2 font-light'>Amount:</p>
            <input 
            type='number' 
            name='amount'
            value={data?.amount}
            onChange={handleInput}
            placeholder='Enter the Amount here...'
            className='transition-all ease-in-out border border-slate-300 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl' />
            { errMsg.amount &&
                <div className='text-red-500 text-sm'>{errMsg.amount}</div>
            }
        </div>
        {/* DESCRIPTION */}
        <div className='w-[100%] mb-6'>
            <p className='mb-2 font-light'>Description:</p>
            <textarea 
            onChange={handleInput}
            value={data?.description}
            name='description'
            placeholder='Enter the Description here...'
            className='h-[8rem] transition-all ease-in-out border border-slate-300 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl'></textarea>
        </div>       
        {/* SUBMIT */}
        <div className='w-[100%] flex items-center justify-center mb-4'>
        <button type='submit' className='group flex items-center justify-center gap-1 transition-all ease-in-out text-white px-10 py-4 rounded-xl hover:drop-shadow-lg bg-gradient-to-br from-cyan-500 to-blue-700 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-800'>
        { isPending ? 'Processing'
            : <>
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
