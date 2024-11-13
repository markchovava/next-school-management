import Link from 'next/link'
import React from 'react'



export default function UserView() {
  return (
    <>
    <section className='mt-3 mx-auto w-[96%] bg-white drop-shadow-md px-6 py-4 mb-[4rem]'>
      {/* LINK */}
      <div className='flex items-center justify-end mb-4'>
        <Link href='/admin/user/edit/1' 
        className='px-4 py-3 link__second'>
          Edit
        </Link>
      </div>
      {/* PARENT / GUARDIAN */}
      <div className='w-[100%] mb-4'>
          <h3 className='font-light text-[2rem]'>User Info</h3>
      </div>
      {/* NAME */}
      <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
        <div className='md:w-[20%] w-[100%] font-light'>Name:</div>
        <div className='md:w-[80%] w-[100%]'>Admin</div>
      </div>
      {/* TEACHER */}
      <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
        <div className='md:w-[20%] w-[100%] font-light'>Role:</div>
        <div className='md:w-[80%] w-[100%]'>Teacher</div>
      </div>
      {/* EMAIL */}
      <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
        <div className='md:w-[20%] w-[100%] font-light'>Email:</div>
        <div className='md:w-[80%] w-[100%]'>Admin</div>
      </div>
      {/* PHONE */}
      <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
        <div className='md:w-[20%] w-[100%] font-light'>Phone Number:</div>
        <div className='md:w-[80%] w-[100%]'>156556</div>
      </div>
      {/* ADDRESSE */}
      <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
        <div className='md:w-[20%] w-[100%] font-light'>Address:</div>
        <div className='md:w-[80%] w-[100%]'>15 Abc</div>
      </div>
      {/* GENDER */}
      <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
        <div className='md:w-[20%] w-[100%] font-light'>Gender:</div>
        <div className='md:w-[80%] w-[100%]'>156556</div>
      </div>
      {/* DATE OF BIRTH */}
      <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
        <div className='md:w-[20%] w-[100%] font-light'>Date of Birth:</div>
        <div className='md:w-[80%] w-[100%]'>15 April</div>
      </div>
      {/* BUTTON */}
      <div className='w-[100%] mb-4 flex md:flex-row flex-col items-center justify-start gap-1'>
        <div className='md:w-[20%] w-[100%] font-light'>Author:</div>
        <div className='md:w-[80%] w-[100%]'>Admin User</div>
      </div>
   
    </section>
    </>
  )
}
