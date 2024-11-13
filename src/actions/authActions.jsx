"use server";
import { baseURL } from "@/api/baseURL";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";



export async function checkAuthAction() {
    const cookieStore = cookies()
    const authToken = cookieStore.get('SCHOOL_ONE_AUTH_COOKIE');
    const res = await fetch(`${baseURL}api/profile-check`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    }); 
    revalidatePath('/login');
    return await res.json();
}

export async function loginAction(data) {
    const res = await fetch(`${baseURL}login`, {
      'method': 'POST',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }); 
    revalidatePath('/admin');
    return await res.json();
}

export async function logoutAction(token) {
    const res = await fetch(`${baseURL}api/logout`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    revalidatePath('/login');
    return await res.json();

}

export async function registerAction(data) {
    const res = await fetch(`${baseURL}register`, {
      'method': 'POST',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    revalidatePath('/login');
    return await res.json();
}