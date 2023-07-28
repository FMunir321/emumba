import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SingninUser from './component/User/SigninUser'
import Dashboard from './component/User/Dashboard';
import Login from './component/Admin/Login';
import AdminDashboard from './component/Admin/AdminDashboard';
import Today from './component/Admin/Today';
import Overall from './component/Admin/Overall';
import Setting from './component/Admin/Setting';
import Test from './component/Admin/test';

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>

  );
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <SingninUser />
  },
  {
    path: "user/dashboard",
    element: <Dashboard />,
  },
  {
    path: "admin",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <AdminDashboard />,
  },
  {
    path: "/today",
    element: <Today />,
  },
  {
    path: "/overall",
    element: <Overall />,
  },
  {
    path: "/setting",
    element: <Setting />,
  },

]);

export default App;
