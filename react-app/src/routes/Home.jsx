import React from 'react'
import MainHeader from '../components/text/main-headder'
import {Link} from 'react-router-dom'
import useAuth from '@hooks/useAuth'

const Home = () => {
    const { auth } = useAuth();

    function getLinks(){
        if(auth?.loggedIn){
            return <Link to="/app/events" className="ml-2 bg-gold text-white p-2 rounded-md">Account home</Link>
        }
        else{
            return <>
                <Link to="/register" className=" bg-blue text-white p-2 rounded-md ">Register</Link>
                <Link to="/login" className="ml-2 bg-gold text-white p-2 rounded-md">Login</Link>
                    </>
        }
    }

    return (
        <div className="flex flex-col items-center">
            <div className="max-w-2xl w-full">
                <MainHeader className={"text-4xl text-center"}>Shreddin'</MainHeader>
                <h1 className='text-center'>the problem for a solution.</h1>
                <div className='relative'>
                    <img src="errors/no_bike.webp" alt=""/>

                    <div className='pt-1 absolute bottom-2 left-2'>
                        {getLinks()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home