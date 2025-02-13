import useLogout from "../../hooks/useLogout";
import { useNavigate } from "react-router-dom";
import Nav from "@components/nav/header";


export default function Profile() {
  const navigate = useNavigate();
  const logout = useLogout();

  const signOut = async () => {
    await logout();
    navigate('/');
  }

  return (
    <div>
    <Nav title="Your profile" />
<button className="bg-blue text-white active:bg-blue-dark active:text-gray-600 rounded-md p-2" onClick={()=> signOut()}>
Sign out
</button>



    <p>Do profile stuff here</p>
    <p>My memebership status: Active</p>
    <p>Contact the treasurer to adjust</p>

  </div>
);
}
