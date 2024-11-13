"use server";
import { baseURL } from "@/api/baseURL";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";



export async function appInfoApiAction() {
    const cookieStore = cookies()
    const authToken = cookieStore.get('SCHOOL_ONE_AUTH_COOKIE');
    const res = await fetch(`${baseURL}api/app-info`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    }); 
    return await res.json();
}


export async function appInfoStoreApiAction(data) {
    const cookieStore = cookies()
    const authToken = cookieStore.get('SCHOOL_ONE_AUTH_COOKIE');
    const res = await fetch(`${baseURL}api/app-info`, {
      'method': 'POST',
      'body': data,
      headers: {
        'Authorization': `Bearer ${authToken?.value}`
      }
    }); 
    revalidatePath('/admin/app-info');
    return await res.json();
}