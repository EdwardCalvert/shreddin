import axios from "../api/axios";
import useAuth from "./useAuth";
import { useNavigate, useLocation } from "react-router-dom";

const useLogout = () => {
    const { setAuth } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const logout = async () => {
        
        try {
            await axios('/api/v1/auth/logout', {
                withCredentials: true
            });
        } catch (err) {
            console.error(err);
        }
        setAuth({});
        navigate("/login", { state: { from: location.pathname } });
    }

    return logout;
}

export default useLogout