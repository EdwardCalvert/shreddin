import useLogout from "../../hooks/useLogout";
import { useNavigate } from "react-router-dom";
import Nav from "@components/nav/header";
import ProfilePhoto from "@components/my-profile/profile-photo";
import useAuth from "@hooks/useAuth";
import MainHeader from "@components/text/main-headder";
import { Suspense, useEffect } from "react";
import ProfileContent from "@components/my-profile/profile-content";


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
    <Suspense fallback={<p>Loading</p>}>
      <ProfileContent/>
    </Suspense>
    

  </div>
);
}
