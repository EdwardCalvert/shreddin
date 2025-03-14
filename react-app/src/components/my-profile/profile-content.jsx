import  React, { useEffect } from 'react'
import {use} from 'react'
import useAuth from '@hooks/useAuth'
import useFetchDataPrivate from '@hooks/useFetchDataPrivate'
import ProfilePhoto from './profile-photo'

let resource;

const getResource = (fetchData) => {
    if (!resource) {
        resource = fetchData("/api/v1/auth/account-info"); 
    }
    return resource;
};

const ProfileContent = () => {
    const fetchData = useFetchDataPrivate();
    const {setAuth} = useAuth();

    const data = getResource(fetchData).read();

    useEffect(() =>{
        if(data !== null){
            setAuth(prevAuth => ({ ...prevAuth, ...data}));
        }
    }, [data])

    return (
    <> 
        <ProfilePhoto/>

        <p>My memebership status: Active</p>
        <p>Contact the treasurer to adjust</p>
        <button className="bg-warn-red text-white active:bg-blue-dark active:text-gray-600 rounded-md p-2" onClick={()=> signOut()}>
        Sign out
        </button>
    </>
    )
}

export default ProfileContent