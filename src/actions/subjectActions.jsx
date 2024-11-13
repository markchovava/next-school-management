"use server";
import { baseURL } from "@/api/baseURL";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function subjectViewAction(id) {
  const res = await fetch(`${baseURL}subject/${id}`, {
    'method': 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken?.value}`
    }
  }); 
  return await res.json();
}

/* AUTHENTICATED */
export async function subjectListApiAction() {
    const cookieStore = cookies()
    const authToken = cookieStore.get('SCHOOL_ONE_AUTH_COOKIE');
    const res = await fetch(`${baseURL}api/subject`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    }); 
    return await res.json();
}

export async function subjectPaginationApiAction(url) {
    const cookieStore = cookies()
    const authToken = cookieStore.get('SCHOOL_ONE_AUTH_COOKIE');
    const res = await fetch(url, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    }); 
    return await res.json();
}

export async function subjectSearchApiAction(input) {
    const cookieStore = cookies()
    const authToken = cookieStore.get('SCHOOL_ONE_AUTH_COOKIE');
    const res = await fetch(`${baseURL}api/subject-search?search=${input}`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    }); 
    revalidatePath('/admin/subject');
    return await res.json();
}

export async function subjectViewApiAction(id) {
    const cookieStore = cookies()
    const authToken = cookieStore.get('SCHOOL_ONE_AUTH_COOKIE');
    const res = await fetch(`${baseURL}api/subject/${id}`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    }); 
    return await res.json();
}

export async function subjectStoreApiAction(data) {
    const cookieStore = cookies()
    const authToken = cookieStore.get('SCHOOL_ONE_AUTH_COOKIE');
    const res = await fetch(`${baseURL}api/subject`, {
      'method': 'POST',
      'body': data,
      headers: {
        'Authorization': `Bearer ${authToken?.value}`
      }
    }); 
    revalidatePath('/admin/subject');
    return await res.json();
}

export async function subjectUpdateApiAction(data, id) {
    const cookieStore = cookies()
    const authToken = cookieStore.get('SCHOOL_ONE_AUTH_COOKIE');
    const res = await fetch(`${baseURL}api/subject/${id}`, {
      'method': 'POST',
      'body': data,
      headers: {
        'Authorization': `Bearer ${authToken?.value}`
      }
    }); 
    revalidatePath(`/admin/subject/${id}`);
    return await res.json();
}

export async function subjectDeleteApiAction(id) {
    const cookieStore = cookies()
    const authToken = cookieStore.get('SCHOOL_ONE_AUTH_COOKIE');
    const res = await fetch(`${baseURL}api/subject/${id}`, {
      'method': 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    }); 
    revalidatePath('/admin/subject');
    return await res.json();
}