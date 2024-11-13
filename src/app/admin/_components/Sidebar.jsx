
import React from 'react'
import { IoSchoolSharp } from 'react-icons/io5'
import SidebarNav from './SidebarNav'
import Link from 'next/link'



export default function Sidebar() {
  return (
    <div className='text-white h-[100vh] overflow-auto scroll__width'>
        <section className='w-[100%] py-6 border-b border-slate-50'>
          <Link href='/'>
            <h3 className='flex flex-col justify-center items-center gap-2 font-bold text-center text-[2rem] leading-none'>
                <IoSchoolSharp className='text-[3rem]' /> 
                My School
            </h3>
          </Link>
        </section>
        <SidebarNav />
    </div>
  )
}
