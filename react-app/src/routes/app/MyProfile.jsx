import useLogout from "../../hooks/useLogout";
import { useNavigate } from "react-router-dom";
import Nav from "@components/nav/header";
import ProfilePhoto from "@components/my-profile/profile-photo";
import useAuth from "@hooks/useAuth";
import MainHeader from "@components/text/main-headder";


export default function Profile() {
  const navigate = useNavigate();
  const logout = useLogout();
  const {auth} = useAuth();

  const signOut = async () => {
    await logout();
    navigate('/');
  }

  return (
    <div>
    <Nav title="Your profile"  />
    <MainHeader className="text-center">Hi, {auth.firstName}!</MainHeader>
    <ProfilePhoto/>
    

    <p>My memebership status: Active</p>
    <p>Contact the treasurer to adjust</p>
    <button className="bg-warn-red text-white active:bg-blue-dark active:text-gray-600 rounded-md p-2" onClick={()=> signOut()}>
    Sign out
    </button>

  </div>
);
}
