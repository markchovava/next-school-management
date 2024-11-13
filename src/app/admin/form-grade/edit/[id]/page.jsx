import React from 'react'
import Link from 'next/link'
import { FaAngleRight } from 'react-icons/fa6'
import FormGradeEdit from './components/FormGradeEdit'
import { formGradeViewApiAction } from '@/actions/formGradeActions';




export default async function page({params: {id} }) {
  const formGradeData = await formGradeViewApiAction(id);

  return (
    <>
    <div className='h-[calc(100vh-3.5rem)] overflow-auto scroll__width bg-slate-50'>
     {/*  */}
     <section className='mx-auto w-[96%] pt-8 pb-3'>
       <h1 className='text-[2.5rem] font-light leading-none'>Edit Form / Grade</h1>
     </section>
     {/*  */}
     <section className='mx-auto w-[96%]'>
       <ul className='text-sm flex items-center justify-end gap-2 border-y border-slate-200'>
         <li><Link href='/' className=''>Home</Link></li>
         <li><FaAngleRight /></li>
         <li><Link href='/admin'>Dashboard</Link></li>
         <li><FaAngleRight /></li>
         <li><Link href='/admin/form-grade'>Form / Grade List</Link></li>
         <li><FaAngleRight /></li>
         <li><Link href={`/admin/form-grade/edit/${id}`} className='font-semibold'>Edit Form / Grade</Link></li>
       </ul>
     </section>

     {/* LIST */}
     <FormGradeEdit dbData={formGradeData} id={id} />


    </div>
    </>
  )
}
