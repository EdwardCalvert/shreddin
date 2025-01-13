import Register from '../../reactapp/src/components/Register';
import Login from '../../reactapp/src/components/Login';
import Home from '../../reactapp/src/components/Home';
import Layout from '../../reactapp/src/components/Layout';
import ErrorLayout from '../../reactapp/src/layouts/ErrorLayout';
import Editor from '../../reactapp/src/components/Editor';
import Admin from '../../reactapp/src/components/Admin';
import Missing from '../../reactapp/src/components/Missing';
import Unauthorized from '../../reactapp/src/components/Unauthorized';
import Lounge from '../../reactapp/src/components/Lounge';
import LinkPage from '../../reactapp/src/components/LinkPage';
import RequireAuth from '../../reactapp/src/components/RequireAuth';
import { Routes, Route } from 'react-router-dom';

const ROLES = {
    'User': 2001,
    'Editor': 1984,
    'Admin': 5150
}

function App() {
    return (
    <Routes>
        <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="linkpage" element={<LinkPage />} />
        <Route path="unauthorized" element={<ErrorLayout> <Unauthorized /></ErrorLayout>} />

        {/* we want to protect these routes */}
        <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
            <Route path="/" element={<Home />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Editor]} />}>
            <Route path="editor" element={<Editor />} />
        </Route>


        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
            <Route path="admin" element={<Admin />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Editor, ROLES.Admin]} />}>
            <Route path="lounge" element={<Lounge />} />
        </Route>

        {/* catch all */}
        <Route path="*" element={<ErrorLayout> <Missing /></ErrorLayout> } />
        </Route>
    </Routes>
    );
}

export default App;