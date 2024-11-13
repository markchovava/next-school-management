import React from 'react'
import MainArea from './_components/MainArea'
import Link from 'next/link'
import { FaAngleRight } from 'react-icons/fa6'
import { checkAuthAction } from '@/actions/authActions';
import { redirect } from 'next/navigation';



export default async function page() {
  const result = await checkAuthAction();
  if(result?.message == 'Unauthenticated.'){
    redirect('/login');
  }

  return (
    <>
     <div className='h-[calc(100vh-3.5rem)] overflow-auto scroll__width'>
      {/*  */}
      <section className='px-8 pt-8 pb-3'>
        <h1 className='text-[2.5rem] font-light leading-none'>Admin Dashboard</h1>
      </section>
      {/*  */}
      <section className='px-8'>
        <ul className='text-sm flex items-center justify-end gap-2 border-y border-slate-200'>
          <li><Link href='/' className=''>Home</Link></li>
          <li><FaAngleRight /></li>
          <li><Link href='/admin' className='font-semibold'>Dashboard</Link></li>
        </ul>
      </section>

      
      <MainArea />
     </div>
    </>
  )
}
