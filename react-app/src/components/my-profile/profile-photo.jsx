import React, { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import api from "@api/axios";
import useAuth from "@hooks/useAuth";

const ProfilePhoto = () => {
    const {auth, setAuth} = useAuth();
    const [uploadState, setUploadState] = useState("ok");

    const handleFileChange = async (event) => {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            const formData = new FormData();
            formData.append('file',file);
            setUploadState("loading");
            await api.post('api/v1/image/profile-photo', formData, {
                headers: {
                'Content-Type': 'multipart/form-data'
                }
            }).then(
                success =>{
                    setUploadState("ok");
                    setAuth((prevAuth) => ({...prevAuth, imageUrl: success.data.url}));
                },
                failure =>{
                    setUploadState("error");
                }
            )
            
        }
    };
    
    function getImageOrLoading(){
        if(uploadState === "loading"){
            return  <svg className="m-auto size-10 animate-spin text-white" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
        }
        if(uploadState === "error"){
            return <p className="text-red-500">Photo not uploaded 🥲</p>
        }
        else{
            return <>
                <img src={auth?.imageUrl? auth.imageUrl : `/default.webp`} className="rounded-full w-full h-full object-cover top-0 bg-white"></img>
                <Icon icon="bi:camera-fill" className="text-blue w-10 h-10 absolute bottom-0 right-0"/> 
            </>
        }
    }

    return (
        <div>

            <div className="relative w-40 h-40 mx-auto mb-4 ">
                <label htmlFor="profile_pic" className={uploadState === "loading"? "cursor-not-allowed pointer-events-none":  `cursor-pointer`}> 
                    {getImageOrLoading()}
                </label>
            </div>
            <input
                id="profile_pic"
                type="file"
                accept="image/png, image/jpg, image/jpeg, image/webp, image/heic, image/heif"
                style={{ display: "none" }}
                onChange={handleFileChange}
            />
        </div>
    );
};

export default ProfilePhoto;