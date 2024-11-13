import React from 'react'
import Link from 'next/link'
import { FaAngleRight } from 'react-icons/fa6'
import SubjectEdit from './components/SubjectEdit'
import { subjectViewApiAction } from '@/actions/subjectActions';




export default async function page({params: {id} }) {
  const subjectData = await subjectViewApiAction(id);

  return (
    <>
    <div className='h-[calc(100vh-3.5rem)] overflow-auto scroll__width bg-slate-50'>
     {/*  */}
     <section className='mx-auto w-[96%] pt-8 pb-3'>
       <h1 className='text-[2.5rem] font-light leading-none'>Edit Subject</h1>
     </section>
     {/*  */}
     <section className='mx-auto w-[96%]'>
       <ul className='text-sm flex items-center justify-end gap-2 border-y border-slate-200'>
         <li><Link href='/' className=''>Home</Link></li>
         <li><FaAngleRight /></li>
         <li><Link href='/admin'>Dashboard</Link></li>
         <li><FaAngleRight /></li>
         <li><Link href='/admin/subject'>Subjects List</Link></li>
         <li><FaAngleRight /></li>
         <li><Link href={`/admin/subject/edit/${id}`} className='font-semibold'>Edit Subject</Link></li>
       </ul>
     </section>

     {/* LIST */}
     <SubjectEdit dbData={subjectData} id={id} />


    </div>
    </>
  )
}
