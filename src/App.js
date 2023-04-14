import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/UserAuth/Login";
import Signup from "./components/UserAuth/Signup";
import ForgotPassword from "./components/UserAuth/ForgotPassword";
import "../src/components/NavBar/NavbarStyles.css";
import BUSOMIcon from "./components/images/BUBCLSLogo.png";
import Reports from "./components/Reports/Reports";

/**React Router */
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
         <div className="NavbarItems">
          <a target="_self" href="/SelectionScreen" rel="noreferrer"><img src={BUSOMIcon} className="BUSOMImageClass" alt=""/></a>
          </div>
        <Login />
      </div>
    ),
  },
  {
    path: "/Signup",
    element: (
      <div>
        <div className="NavbarItems">
          <a target="_self" href="/SelectionScreen" rel="noreferrer"><img src={BUSOMIcon} className="BUSOMImageClass" alt=""/></a>
        </div>
        <Signup />
      </div>
    ),
  },
  {
    path: "/ForgotPassword",
    element: (
      <div>
        <div className="NavbarItems">
          <a target="_self" href="/SelectionScreen" rel="noreferrer"><img src={BUSOMIcon} className="BUSOMImageClass" alt=""/></a>
        </div>
        <ForgotPassword />
      </div>
    ),
  },
  {
    path: "/reports",
    element: (
      <div>
        <Navbar />
        <Reports />
      </div>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
