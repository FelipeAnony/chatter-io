import { useRoutes } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';
import SignUp from './pages/SignUp';

function AppRoutes() {
  return useRoutes([
    {path:'/', element: <Main />},
    {path:'/login', element: <Login />},
    {path:'/signup', element: <SignUp />}
  ])
}


export default AppRoutes;