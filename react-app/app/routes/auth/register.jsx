import MainHeader from "../../components/text/main-headder";
import InputGroup from "../../components/form/input-group";
import { useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

const USER_REGEX = /^([a-z]|\d|\.){5,20}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';

const Register = () =>{
    const usernameRef = useRef();
    const errRef = useRef();

    const [username, setUsername] = useState('');
    const [validUsername, setValidUsername] = useState(false);
    const [usernameFocus, setUsernameFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    useEffect(() => {
        usernameRef.current.focus();
    }, [])

    useEffect(() => {
        setValidUsername(USER_REGEX.test(username));
    }, [username])

    return <div className="flex flex-row  justify-center items-center">
        <div className="flex flex-col items-center justify-center max-w-md w-full mx-4">
            <img src="logo.png" className="w-52" ></img>
            <MainHeader className="text-2xl">Welcome!</MainHeader>
            <p>We just need a few details go get you on the trails</p>
            {/* <InputGroup title={"Username"} name="Test" onChange={(e) => console.log(e)} type="text"></InputGroup> */}

            <label htmlFor="username" className="font-semibold">Username</label>
            <input required 
                ref={usernameRef}
                value={username}
                onChange={(e) => setUsername(e.target.value.toLowerCase())}  
                id="username" 
                className={`w-full rounded-md  border-green-500 border-2  p-1`} 
                type="text"
                onFocus={() => setUsernameFocus(true)}
                onBlur={()=> setUsernameFocus(false)}
                />
            <p className={usernameFocus &&  username && ! validUsername? "bg-gray-600 text-white w-full p-2 rounded-md" :"hidden"}>
                5 to 20 characters.<br />
                Lowercase letter and dots allowed. 
            </p>
                
            <button className="absolute bottom-4 bg-blue text-white active:bg-blue-dark rounded-lg w-[calc(100%-2em)] p-2">Enter</button>
        </div>
    </div>
}

export default Register;