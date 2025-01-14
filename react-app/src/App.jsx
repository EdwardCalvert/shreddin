import Register from './routes/errors/Register';
import Login from './routes/errors/Login';
import Home from './routes/Home';
import Layout from './layouts/AppLayout';
import Missing from './routes/errors/Missing';
import Unauthorized from './routes/errors/Unauthorized';
import RequireAuth from './routes/errors/RequireAuth';
import { Routes, Route } from 'react-router-dom';
import Event from './routes/app/Event';
import EventDetails from './routes/app/EventDetails';
import JoinIn from './routes/app/JoinIn';
import Medical from './routes/app/Medical';
import MyMedical from './routes/app/MyMedical';
import SettleUp from './routes/app/SettleUp';
import Locations from './routes/app/Locations';
import Profile from './routes/app/MyProfile';

const ROLES = {
    'User': "2001",
}

function App() {
    return (
    <Routes>
        <Route path="/"  >
          <Route element={<RequireAuth allowedRoles={[ROLES.User, "5001"]} />}>
            <Route path="app/" element={<Layout/>} > 
              <Route path="events" element={<Event/>}/>
              <Route path="events/details" element={<EventDetails/>}/>
              <Route path="events/details/join-in" element={<JoinIn/>}/>
              <Route path="medical/me" element={<MyMedical/>}/>
              <Route path="medical" element={<Medical/>}/>
              <Route path="settle-up" element={<SettleUp/>}/>
              <Route path="locations" element={<Locations/>}/>
              <Route path="profile" element={<Profile/>}/>
            </Route>
          </Route>
          {/* public routes */}

          <Route path="/" element={<Home/>}/>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="unauthorized" element={<Unauthorized />} />

          {/* we want to protect these routes */}
          


          {/* catch all */}
          <Route path="*" element={<Missing />} />
        </Route>
    </Routes>
    );
}

export default App;