"use client";
import { loginAction } from '@/actions/authActions';
import { cookieAuthClient } from '@/cookies/cookieAuthClient';
import { cookieRoleClient } from '@/cookies/cookieRoleClient';
import { tokenAuth } from '@/localstorage/tokenAuth';
import { tokenRole } from '@/localstorage/tokenRole';
import { reactToastifyDark } from '@/utils/reactToastify';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { IoSchoolSharp } from "react-icons/io5";
import { toast } from 'react-toastify';




export default function Login() {
    const router = useRouter();
    const { setAuthToken } = tokenAuth();
    const { setAuthCookie } = cookieAuthClient();
    const { setRoleToken } = tokenRole();
    const { setRoleCookie } = cookieRoleClient();
    const [data, setData] = useState({});
    const [errMsg, setErrMsg] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const handleInput = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    async function postData() {
        if(!data.email) {
            const message = 'Email is required.';
            toast.warn(message, reactToastifyDark);
            setErrMsg({email: message});
            setIsSubmit(false);
            return;
        }
        if(!data.password) {
            const message = 'Password is required.';
            toast.warn(message, reactToastifyDark);
            setErrMsg({password: message});
            setIsSubmit(false);
            return;
        }
        const formData = {
            email: data?.email,
            password: data?.password
        };
        try{
            const res = await loginAction(formData);
            if(res.status == 1) {
                toast.success(res.message, reactToastifyDark);
                setAuthToken(res.auth_token);
                setAuthCookie(res.auth_token); 
                if(res?.role_id) { 
                    setRoleCookie(res.role_id); 
                    setRoleToken(res.role_id);
                }
                setErrMsg({});
                router.push('/admin');
                setIsSubmit(false);
            }
            if(res.status == 0) {
                toast.warn(res.message, reactToastifyDark);
                setErrMsg({});
                setIsSubmit(false);
            }
            } catch (error) {
                console.error(`Error: ${error}`);
                setIsSubmit(false); 
        }
    }

    useEffect(() => {
        isSubmit && postData();
    }, [isSubmit]);


  return (
    <>
    <section className='w-[100%] py-[7rem]'>
        <div className='mx-auto w-[90%] md:w-[40%] px-6 py-8 bg-white rounded-2xl drop-shadow-2xl'>
        <form action={() => setIsSubmit(true)} className='text-slate-700' method='POST'>
            <h3 className='flex flex-col justify-center items-center gap-2 font-bold text-center text-[2rem] leading-none mb-[2rem]'>
                <IoSchoolSharp className='text-[3rem]' /> My School
            </h3>
            <hr className='mx-auto mb-4 w-[60%]' />
            <h4 className='text-center text-[1.8rem] leading-none mb-[1rem]'>
                Login
            </h4>
            {/* EMAIL */}
            <div className='w-[100%] mb-4'>
                <label className='font-lg block pb-1'>Email:</label>
                <input type='text' name='email' 
                    onChange={handleInput}
                    placeholder='Enter Email here...' 
                    className='transition-all ease-in-out border border-slate-200 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl' />
                {errMsg.email &&
                    <p className='text-red-600 text-sm'>{errMsg.email}</p>
                }
            </div>
            {/* PASSWORD */}
            <div className='w-[100%] mb-4'>
                <label className='font-lg block pb-1'>Password:</label>
                <input type='password' name='password' 
                    onChange={handleInput}
                    placeholder='Enter Password here...' 
                    className='transition-all ease-in-out border border-slate-200 px-3 py-3 hover:border-slate-600 w-[100%] outline-none rounded-xl' />
                {errMsg.password &&
                    <p className='text-red-600 text-sm'>{errMsg.password}</p>
                }
            </div>
            <div className='w-[100%] mb-4 flex justify-between'>
                <div className='flex items-center gap-1 '>
                    <input type='radio' 
                        name='remember_me' 
                        onChange={handleInput} value={1} /> Remember me!
                </div>
                <Link href='#' className='text-cyan-700 underline hover:no-underline transition-all ease-in-out duration-200'>
                    Forgot Password.
                </Link>
            </div>
            {/*  */}
            <div className='flex items-center justify-center mb-4'>
                <button type='submit' 
                    className='group flex items-center justify-center gap-1 transition-all ease-in-out text-white px-10 py-4 rounded-xl hover:drop-shadow-lg bg-gradient-to-br from-cyan-500 to-blue-700 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-800'>
                    { isSubmit 
                    ? 'Processing' 
                    : 
                    <>
                    Login <FaArrowRightLong className='transition-all ease-in-out duration-200 group-hover:translate-x-1' />
                    </> }
                </button>
            </div>
            <div className='w-[100%] mb-4 text-center py-2 font-bold text-xl'>
                OR
            </div>
            {/*  */}
            <div className='w-[100%] mb-4 flex items-center justify-center gap-4'>
                <button type='button' className='transition-all duration-200 ease-in-out hover:drop-shadow-lg bg-slate-200 rounded-2xl px-10 py-3 text-blue-600'>
                    Google
                </button>
                <button type='button' className='transition-all duration-200 ease-in-out text-white hover:drop-shadow-lg rounded-2xl px-5 py-3 bg-blue-600'>
                    Facebook
                </button>
            </div>
            {/*  */}
            <hr className='mx-auto mb-4 w-[60%]' />
            {/*  */}
            <div className='mb-4 mt-8 flex justify-center'>
                <p className='flex gap-1'>Dont have an account? 
                <Link 
                href='/register' 
                className='underline hover:no-underline text-cyan-800 transition-all ease-in-out'>
                    Register</Link>
                </p>
            </div>
        </form>  
        </div>
    </section>
    </>
  )
}
