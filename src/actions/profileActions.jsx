"use server";

import { baseURL } from "@/api/baseURL";
import { cookies } from "next/headers";



export async function profileViewAction() {
    const cookieStore = cookies()
    const authToken = cookieStore.get('SCHOOL_ONE_AUTH_COOKIE');
    const res = await fetch(`${baseURL}api/profile`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    }); 
    // revalidatePath('/login');
    return await res.json();
}