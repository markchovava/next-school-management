import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa6'
import SubjectList from './_components/SubjectList'
import { subjectListApiAction } from '@/actions/subjectActions';



export default async function page() {
  const subjectData = await subjectListApiAction();



  return (
    <>
    <div className='h-[calc(100vh-3.5rem)] overflow-auto scroll__width bg-slate-50'>
     {/*  */}
     <section className='mx-auto w-[96%] pt-8 pb-3'>
       <h1 className='text-[2.5rem] font-light leading-none'>Subjects List</h1>
     </section>
     {/*  */}
     <section className='mx-auto w-[96%]'>
       <ul className='text-sm flex items-center justify-end gap-2 border-y border-slate-200'>
         <li><Link href='/' className=''>Home</Link></li>
         <li><FaAngleRight /></li>
         <li><Link href='/admin'>Dashboard</Link></li>
         <li><FaAngleRight /></li>
         <li><Link href='/admin/subject' className='font-semibold'>Subjects List</Link></li>
       </ul>
     </section>

     {/* LIST */}
     <SubjectList dbData={subjectData} />

    </div>
    </>
  )
}
