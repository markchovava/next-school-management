import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa6'
import EventView from './_components/EventView'
import { eventViewApiAction } from '@/actions/eventActions'




export default async function page({ params: {id} }) {
  const eventData = await eventViewApiAction(id);

  return (
    <>
    <div className='h-[calc(100vh-3.5rem)] overflow-auto scroll__width bg-slate-50'>
     {/*  */}
     <section className='mx-auto w-[96%] pt-8 pb-3'>
       <h1 className='text-[2.5rem] font-light leading-none'>View Event</h1>
     </section>
     {/*  */}
     <section className='mx-auto w-[96%]'>
       <ul className='text-sm flex items-center justify-end gap-2 border-y border-slate-200'>
         <li><Link href='/' className=''>Home</Link></li>
         <li><FaAngleRight /></li>
         <li><Link href='/admin'>Dashboard</Link></li>
         <li><FaAngleRight /></li>
         <li><Link href='/admin/event'>Events List</Link></li>
         <li><FaAngleRight /></li>
         <li><Link href={`/admin/event/1${id}`} className='font-semibold'>View Event</Link></li>
       </ul>
     </section>

     {/* LIST */}
     <EventView dbData={eventData} id={id} />


    </div>
    </>
  )
}
