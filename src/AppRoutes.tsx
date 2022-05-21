import { useRoutes } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import PasswordReset from './pages/PasswordReset';
import SignUp from './pages/SignUp';

function AppRoutes() {
  return useRoutes([
    {path:'/', element: <Main />},
    {path:'/login', element: <Login />},
    {path:'/signup', element: <SignUp />},
    {path: '/forgotpassword', element: <PasswordReset />},
    {path: '*', element:<NotFound />}
  ])
}


export default AppRoutes;