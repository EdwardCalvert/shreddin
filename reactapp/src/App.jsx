import Register from './routes/errors/Register';
import Login from './routes/errors/Login';
import Home from './routes/errors/Home';
import Layout from './layouts/AppLayout';
import Editor from './routes/errors/Editor';
import Missing from './routes/errors/Missing';
import Unauthorized from './routes/errors/Unauthorized';
import RequireAuth from './routes/errors/RequireAuth';
import { Routes, Route } from 'react-router-dom';
import Event from './routes/app/Event';

const ROLES = {
    'User': 2001,
    'Editor': 1984,
    'Admin': 5150
}

function App() {
    return (
    <Routes>
        <Route path="/"  >
          <Route path="app/" element={<Layout/>} > 
            <Route path="events" element={<Event/>}/>
          </Route>
          {/* public routes */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="unauthorized" element={<Unauthorized />} />

          {/* we want to protect these routes */}
          <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
              <Route path="/" element={<Home />} />
          </Route>


          {/* catch all */}
          <Route path="*" element={<Missing />} />
        </Route>
    </Routes>
    );
}

export default App;