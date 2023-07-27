import logo from './logo.svg';
import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Dashboard from './component/User/Dashboard';
import SigninUser from './component/User/SigninUser';
import Login from './component/Admin/Login';
import ReactModal from 'react-modal';
import RecordsModal from './component/User/RecordsModal';
import AdminDashboard from './component/Admin/AdminDashboard';
import Today from './component/Admin/Today';
import Overall from './component/Admin/Overall';
import Setting from './component/Admin/Setting';
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
    element: <SigninUser />
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
