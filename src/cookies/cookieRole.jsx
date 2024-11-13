import { getCookie } from "cookies-next";
import { cookies } from "next/headers";

 
export const cookieRole = () => {
    const getAuthCookie = () => {
        const authCookie = getCookie('SCHOOL_ONE_ROLE_COOKIE', { cookies });
        return authCookie;
    }
   
    return {
        getAuthCookie,
    }
  }



