import { useRef, useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import axios from '../../api/axios';
import useLocalStorage from '../../hooks/useLocalStorage';
import MainHeader from '../../components/text/main-headder';
const LOGIN_URL = '/api/v1/auth/login';

const Login = () => {
    const { setAuth } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/app/events";

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useLocalStorage("username",'');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ username: user, password: pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
            const roles = response?.data?.roles;
            setAuth({ loggedIn: true, roles });
            setPwd('');
            navigate(from, { replace: true });
        } catch (err) {
            console.log(err)
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.data.frontendHint ) {
                setErrMsg(err.response?.data.frontendHint);
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    return (

        <section className="flex flex-col justify-center items-center">
            
            <MainHeader>Sign In</MainHeader>
            <p ref={errRef} className={errMsg ? "bg-warn-red text-white p-2 rounded-md" : "hidden"} >{errMsg}</p>
            <div className="items-center justify-center max-w-md w-full mx-4">
            <form onSubmit={handleSubmit} className="flex flex-col">
                <label htmlFor="username">Username:</label>
                <input
                    className="bg-white p-1 rounded-md"
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value.toLowerCase())}
                    value={user}
                    required
                />

                <label htmlFor="password" className='mt-4'>Password:</label>
                <input
                    className="bg-white p-1 rounded-md"
                    type="password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                />
                <button type='submit' className='mt-4 bg-gold text-white active:bg-gold-dark rounded-lg w-full p-2 disabled:bg-gold-dark disabled:text-gray-300'>Sign In</button>
            </form>
            <p className='mt-4'>
                Need an Account? <Link to="/register" className='ml-2 bg-blue text-white p-2 rounded-md'>Sign Up</Link>
            </p>
            </div>
        </section>

    )
}

export default Login
