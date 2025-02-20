import { axiosPrivate } from "@api/axios";
import useLogout from "./useLogout";

function wrapPromise(promise, logout) {
    let status = "pending";
    let result;

    const suspender = promise.then(
        (res) => {
            status = "success";
            result = res.data;
        },
        async (err) => {
            if(err?.response?.status === 401){
                await logout();
            }
            status = "error";
            result = err;
        }
    );

    return {
        read() {
            if (status === "pending") {
                throw suspender; // Suspense will catch this
            } else if (status === "error") {
                throw result;
            } else if (status === "success") {
                return result;
            }
        },
    };
}

const useFetchDataPrivate = () => {
    const logout = useLogout();

    return (url) => {
        const promise = axiosPrivate.get(url);
        return wrapPromise(promise, logout); // Wrap axios request for Suspense
    };
};

export default useFetchDataPrivate;