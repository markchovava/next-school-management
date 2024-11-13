import React from 'react'
import Link from 'next/link'
import { FaAngleRight } from 'react-icons/fa6'
import StudentEdit from './components/StudentEdit'



export default function page({params: {id} }) {
  return (
    <>
    <div className='h-[calc(100vh-3.5rem)] overflow-auto scroll__width bg-slate-50'>
     {/*  */}
     <section className='mx-auto w-[96%] pt-8 pb-3'>
       <h1 className='text-[2.5rem] font-light leading-none'>Edit Student</h1>
     </section>
     {/*  */}
     <section className='mx-auto w-[96%]'>
       <ul className='text-sm flex items-center justify-end gap-2 border-y border-slate-200'>
         <li><Link href='#' className=''>Home</Link></li>
         <li><FaAngleRight /></li>
         <li><Link href='#'>Dashboard</Link></li>
         <li><FaAngleRight /></li>
         <li><Link href='/admin/user/student'>Student List</Link></li>
         <li><FaAngleRight /></li>
         <li><Link href='/admin/user/student/edit/1' className='font-semibold'>Edit Student</Link></li>
       </ul>
     </section>

     {/* LIST */}
     <StudentEdit />


    </div>
    </>
  )
}
