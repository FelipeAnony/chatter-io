import { useRoutes } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';

function AppRoutes() {
  return useRoutes([
    {path:'/', element: <Main />},
    {path:'/login', element: <Login />}
  ])
}


export default AppRoutes;