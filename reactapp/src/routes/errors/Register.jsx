import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from '../../api/axios';
import { Link } from "react-router-dom";
import MainHeader from "../../components/text/main-headder";

const USER_REGEX = /^([a-z]|\d|\.){5,20}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/api/v1/auth/register';

const Register = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if button enabled with JS hack
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }
        try {
            const response = await axios.post(REGISTER_URL,{ Username: user, Password: pwd },
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            // TODO: remove console.logs before deployment
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response))
            setSuccess(true);
            //clear state and controlled inputs
            setUser('');
            setPwd('');
            setMatchPwd('');
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
    }

    return (
        <>
            {success ? (
                <section>
                    <h1>Success!</h1>
                    <p>
                        <a href="#">Sign In</a>
                    </p>
                </section>
            ) : (
                <div className="flex flex-col  justify-center items-center">
                    <MainHeader>Register</MainHeader>
                    <div className="items-center justify-center max-w-md w-full mx-4">
                        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                        
                        <form onSubmit={handleSubmit} className="flex flex-col">
                            <label htmlFor="username">
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

                            <button disabled={!validName || !validPwd || !validMatch ? true : false} className=" mt-4 bg-gold text-white active:bg-gold-dark rounded-lg w-full p-2 disabled:bg-gold-dark disabled:text-gray-300" type="submit">Sign Up</button>
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
