"use server";
import { baseURL } from "@/api/baseURL";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function classroomViewAction(id) {
  const res = await fetch(`${baseURL}classroom/${id}`, {
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
export async function classroomListApiAction() {
    const cookieStore = cookies()
    const authToken = cookieStore.get('SCHOOL_ONE_AUTH_COOKIE');
    const res = await fetch(`${baseURL}api/classroom`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    }); 
    return await res.json();
}

export async function classroomPaginationApiAction(url) {
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

export async function classroomSearchApiAction(input) {
    const cookieStore = cookies()
    const authToken = cookieStore.get('SCHOOL_ONE_AUTH_COOKIE');
    const res = await fetch(`${baseURL}api/classroom-search?search=${input}`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    }); 
    revalidatePath('/admin/classroom');
    return await res.json();
}

export async function classroomViewApiAction(id) {
    const cookieStore = cookies()
    const authToken = cookieStore.get('SCHOOL_ONE_AUTH_COOKIE');
    const res = await fetch(`${baseURL}api/classroom/${id}`, {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    }); 
    return await res.json();
}

export async function classroomStoreApiAction(data) {
    const cookieStore = cookies()
    const authToken = cookieStore.get('SCHOOL_ONE_AUTH_COOKIE');
    const res = await fetch(`${baseURL}api/classroom`, {
      'method': 'POST',
      'body': data,
      headers: {
        'Authorization': `Bearer ${authToken?.value}`
      }
    }); 
    revalidatePath('/admin/classroom');
    return await res.json();
}

export async function classroomUpdateApiAction(data, id) {
    const cookieStore = cookies()
    const authToken = cookieStore.get('SCHOOL_ONE_AUTH_COOKIE');
    const res = await fetch(`${baseURL}api/classroom/${id}`, {
      'method': 'POST',
      'body': data,
      headers: {
        'Authorization': `Bearer ${authToken?.value}`
      }
    }); 
    revalidatePath(`/admin/classroom/${id}`);
    return await res.json();
}

export async function classroomDeleteApiAction(id) {
    const cookieStore = cookies()
    const authToken = cookieStore.get('SCHOOL_ONE_AUTH_COOKIE');
    const res = await fetch(`${baseURL}api/classroom/${id}`, {
      'method': 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    }); 
    revalidatePath('/admin/classroom');
    return await res.json();
}