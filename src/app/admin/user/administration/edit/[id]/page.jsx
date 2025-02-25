import React from 'react'
import Link from 'next/link'
import { FaAngleRight } from 'react-icons/fa6'
import AdministrationEditt from './components/AdministrationEdit'



export default function page({params: {id} }) {
  return (
    <>
    <div className='h-[calc(100vh-3.5rem)] overflow-auto scroll__width bg-slate-50'>
     {/*  */}
     <section className='mx-auto w-[96%] pt-8 pb-3'>
       <h1 className='text-[2.5rem] font-light leading-none'>Edit Administration</h1>
     </section>
     {/*  */}
     <section className='mx-auto w-[96%]'>
       <ul className='text-sm flex items-center justify-end gap-2 border-y border-slate-200'>
         <li><Link href='#' className=''>Home</Link></li>
         <li><FaAngleRight /></li>
         <li><Link href='#'>Dashboard</Link></li>
         <li><FaAngleRight /></li>
         <li><Link href='/admin/user/administration'>User List</Link></li>
         <li><FaAngleRight /></li>
         <li><Link href='/admin/user/administration/edit/1' className='font-semibold'>Edit Administration</Link></li>
       </ul>
     </section>

     {/* LIST */}
     <AdministrationEditt />


    </div>
    </>
  )
}
