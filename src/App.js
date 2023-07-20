import logo from './logo.svg';
import './App.css';
import Dashboard from './component/User/Dashboard';
import SigninUser from './component/User/SigninUser';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

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
]);

export default App;
