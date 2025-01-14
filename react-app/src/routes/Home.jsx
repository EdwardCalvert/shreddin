import React from 'react'
import MainHeader from '../components/text/main-headder'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="max-w-2xl w-full">
                <MainHeader className={"text-4xl text-center"}>Shreddin'</MainHeader>
                <h1 className='text-center'>the problem for a solution.</h1>
                <div className='relative'>
                    <img src="errors/no_bike.webp" />

                    <div className='pt-1 absolute bottom-2 left-2'>
                        
                        <Link to="/register" className=" bg-blue text-white p-2 rounded-md ">Register</Link>
                        <Link to="/login" className="ml-2 bg-gold text-white p-2 rounded-md">Login</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home