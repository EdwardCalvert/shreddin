import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "@hooks/useAuth";

const RequireLoggedOut = () => {
    const { auth } = useAuth();
    const location = useLocation();

    return (
        auth?.loggedIn
            ? <Outlet />
            : <Navigate to="/app/events" state={{ from: location }} replace />
    );
}

export default RequireLoggedOut;