import { axiosPrivate } from "./axios";

function wrapPromise(promise){
    
    let status = "pending";
    let result;

    const suspender = promise.then(
        (res) =>{
            status = "success";
            result = res.data;
        },
        (err) =>{
            status = "error";
            result = err;
        }
    );

    return{
        read(){
            if (status === "pending"){
                throw suspender;
            }
            else if(status === "error"){
                throw result;
            }
            else if(status === "success"){
                return result;
            }
        }
    }
}



export default function fetchData(url){
    const promise = axiosPrivate.get(url);
    return wrapPromise(promise);
}