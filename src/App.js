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
import ChangePassword from './component/Admin/ChangePassword';

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
    element: <ChangePassword />
  },
  {
    path: "user/dashboard",
    element: <Dashboard />,
  },
  {
    path: "login",
    element: <Login />,
  },
]);

export default App;
