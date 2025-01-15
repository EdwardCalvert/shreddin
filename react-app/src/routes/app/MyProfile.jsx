import useLogout from "../../hooks/useLogout";
import { useNavigate } from "react-router-dom";


export default function Profile() {
  const navigate = useNavigate();
  const logout = useLogout();

  const signOut = async () => {
    navigate('/');
    await logout();
      
  }

  return (
    <div>

<button className="bg-blue text-white active:bg-blue-dark active:text-gray-600 rounded-md p-2" onClick={()=> signOut()}>
Sign out
</button>



<button onClick={()=> {fetch("https://localhost:7066/api/v1/auth/get-details", {
  method: 'GET',
  credentials: 'include'
})
  .then((response) => response.json())
  .then((json) => {
    console.log('Gotcha');
  }).catch((err) => {
    console.log(err);
});}}>Check if im logged in</button>

    <p>Do profile stuff here</p>
    <p>Logout here</p>
    <p>My memebership status: Active</p>
    <p>Contact the treasurer to adjust</p>

  </div>
);
}
