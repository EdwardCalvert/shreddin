import axios from "../api/axios";
import useAuth from "./useAuth";

const useLogout = () => {
    const { setAuth } = useAuth();

    const logout = async () => {
        
        try {
            await axios('/api/v1/auth/logout', {
                withCredentials: true
            });
        } catch (err) {
            console.error(err);
        }
        setAuth({});
    }

    return logout;
}

export default useLogout