import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from '../../api/axios';
import { Link } from "react-router-dom";
import MainHeader from "../../components/text/main-headder";
import useInput from "../../hooks/useInput";
import useLocalStorage from "../../hooks/useLocalStorage";
import ButtonWithSpinner from "@components/buttons/button";

const USER_REGEX = /^([a-z]|\d|\.){5,20}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/api/v1/auth/register';

const Register = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useLocalStorage("username","");
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [firstName, resetFirstName, firstNameObj] = useInput("");
    const [validFirstName, setValidFirstName] = useState(false);

    const [lastName, resetLastName, lastNameObj] = useInput("");
    const [validLastName, setValidLastName] =useState(false);

    const [securityCode, resetSecurityCode, securityCodeObj] = useInput("");
    const [validSecurityCode, setValidSecurityCode] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user])

    useEffect(() => {
        setValidFirstName(firstName.length >0 && firstName.length < 25);
    }, [firstName])

    useEffect(() => {
        setValidLastName(lastName.length >0 && lastName.length < 25);
    }, [lastName])

    useEffect(() => {
        setValidSecurityCode(securityCode.length == 15);
    }, [securityCode])


    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd,firstName,lastName])

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if button enabled with JS hack
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }
        setLoading(true);
        try {
            const response = await axios.post(REGISTER_URL,{ Username: user, Password: pwd, Firstname: firstName, Lastname: lastName, SecurityCode : securityCode },
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            setSuccess(true);
            //clear state and controlled inputs
            setPwd('');
            setMatchPwd('');
            resetFirstName();
            resetLastName();
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if(err.response?.frontendHint){
                setErrMsg(err.response.frontendHint)
            }else if (err.response?.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        }
        //setLoading(false);
    }

    return (
        <>
            {success ? (
                <section className="flex flex-col  justify-center items-center">
                    <MainHeader>Success!</MainHeader>

                    <div className="mt-2">
                        <Link to="/login" className=" ml-2 bg-blue text-white p-2 rounded-md">Sign In</Link>
                    </div>
                </section>
            ) : (
                <div className="flex flex-col  justify-center items-center">
                    <MainHeader>Register</MainHeader>
                    <div className="items-center justify-center max-w-md w-full mx-4">
                        <p ref={errRef} className={errMsg ? "bg-warn-red text-white p-2 rounded-md" : "hidden"} >{errMsg}</p>
                        
                        <form onSubmit={handleSubmit} className="flex flex-col">

                        <label htmlFor="firstName">
                                First name:
                                <FontAwesomeIcon icon={faCheck} className={validFirstName ? "text-success-green" : "hidden"} />
                                <FontAwesomeIcon icon={faTimes} className={validFirstName || !firstName ? "hidden" : "text-warn-red"} />
                            </label>
                            <input
                                className="bg-white p-1 rounded-md"
                                type="text"
                                id="firstName"
                                {...firstNameObj}
                                required
                            />
                            <label htmlFor="lastName" className="mt-4">
                                Last name:
                                <FontAwesomeIcon icon={faCheck} className={validLastName ? "text-success-green" : "hidden"} />
                                <FontAwesomeIcon icon={faTimes} className={validFirstName || !lastName ? "hidden" : "text-warn-red"} />
                            </label>
                            <input
                                className="bg-white p-1 rounded-md"
                                type="text"
                                id="lastName"
                                {...lastNameObj}
                                required
                            />
                            <label htmlFor="username" className="mt-4">
                                Username:
                                <FontAwesomeIcon icon={faCheck} className={validName ? "text-success-green" : "hidden"} />
                                <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hidden" : "text-warn-red"} />
                            </label>
                            <input
                                className="bg-white p-1 rounded-md w-full "
                                type="text"
                                id="username"
                                ref={userRef}
                                autoComplete="off"
                                onChange={(e) => setUser(e.target.value.toLowerCase())}
                                value={user}
                                required
                                aria-invalid={validName ? "false" : "true"}
                                aria-describedby="uidnote"
                                onFocus={() => setUserFocus(true)}
                                onBlur={() => setUserFocus(false)}
                            />
                            <p id="uidnote" className={userFocus && user && !validName ? "bg-gray-700 text-white p-1 rounded-md mt-2" : "hidden"}>
                                <FontAwesomeIcon icon={faInfoCircle} />
                                5 to 20 characters.<br />
                                Lowercase letters and full stops allowed.
                            </p>


                            <label htmlFor="password" className="mt-4">
                                Password:
                                <FontAwesomeIcon icon={faCheck} className={validPwd ? "text-success-green" : "hidden"} />
                                <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hidden" : "text-warn-red"} />
                            </label>
                            <input
                                className="bg-white p-1 rounded-md"
                                type="password"
                                id="password"
                                onChange={(e) => setPwd(e.target.value)}
                                value={pwd}
                                required
                                aria-invalid={validPwd ? "false" : "true"}
                                aria-describedby="pwdnote"
                                onFocus={() => setPwdFocus(true)}
                                onBlur={() => setPwdFocus(false)}
                            />
                            <p id="pwdnote" className={pwdFocus && !validPwd ? "bg-gray-700 text-white p-1 rounded-md mt-2" : "hidden"}>
                                <FontAwesomeIcon icon={faInfoCircle} />
                                8 to 24 characters.<br />
                                Must include uppercase and lowercase letters, a number and a special character.<br />
                                Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                            </p>


                            <label htmlFor="confirm_pwd" className="mt-4">
                                Confirm Password:
                                <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "text-success-green" : "hidden"} />
                                <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hidden" : "text-warn-red"} />
                            </label>
                            <input
                                className="bg-white p-1 rounded-md"
                                type="password"
                                id="confirm_pwd"
                                onChange={(e) => setMatchPwd(e.target.value)}
                                value={matchPwd}
                                required
                                aria-invalid={validMatch ? "false" : "true"}
                                aria-describedby="confirmnote"
                                onFocus={() => setMatchFocus(true)}
                                onBlur={() => setMatchFocus(false)}
                            />
                            <p id="confirmnote" className={matchFocus && !validMatch ? "bg-gray-700 text-white p-1 rounded-md mt-2" : "hidden"}>
                                <FontAwesomeIcon icon={faInfoCircle} />
                                Must match the first password input field.
                            </p>

                            

                            <label htmlFor="securityCode" className="mt-4">
                                AUMBC's Security code:
                                <FontAwesomeIcon icon={faCheck} className={validSecurityCode ? "text-success-green" : "hidden"} />
                                <FontAwesomeIcon icon={faTimes} className={validSecurityCode || !securityCode ? "hidden" : "text-warn-red"} />
                            </label>
                            <input
                                className="bg-white p-1 rounded-md"
                                type="text"
                                id="securityCode"
                                {...securityCodeObj}
                                required
                            />
                            <ButtonWithSpinner disabled={!validName || !validPwd || !validMatch || !validFirstName || !validLastName ? true : false} text="Sign up" loading={loading}/>
                        </form>
                        <p className="mt-6">
                            Already registered? <span className=" ml-2 bg-blue text-white p-2 rounded-md"><Link to="/">Sign In</Link></span>
                        </p>
                    </div>
                </div>
            )}
        </>
    )
}

export default Register
