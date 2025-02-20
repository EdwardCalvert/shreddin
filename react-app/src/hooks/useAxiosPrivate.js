import { axiosPrivate } from "../api/axios";
import { useEffect } from "react";
import useLogout from "./useLogout";

const useAxiosPrivate = () => {
    const logout = useLogout();

    useEffect(() => {
        //Heavily inspired by
        //https://github.com/gitdagray/react_login_hooks/blob/7ccf62b87144c19fb54d0ba2bc1eecc2679bfb52/src/hooks/useAxiosPrivate.js 
        const responseIntercept = axiosPrivate.interceptors.response.use(
            response => response,
            async (error) => {
                if(error?.response?.status === 401){
                    //Log user out- to ensure they don't have stale cookies. 
                    await logout();
                }
                return Promise.reject(error);
            });
        

        return () => {
            axiosPrivate.interceptors.response.eject(responseIntercept);
        }
    }, [])

    return axiosPrivate;
}

export default useAxiosPrivate;