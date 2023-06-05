import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/UserAuth/Login";
import Signup from "./components/UserAuth/Signup";
import ForgotPassword from "./components/UserAuth/ForgotPassword";
import "../src/components/NavBar/NavbarStyles.css";
import BUSOMIcon from "./components/images/BUBCLSLogo.png";
import SidePanel from "./components/SidePanel/SidePanel";
import Simulation1 from "./components/Quiz/Simulation1/Simulation1";
import Simulation2 from "./components/Quiz/Simulation2/Simulation2";
import Evaluation1 from "./components/Quiz/Evaluation1/Evaluation1";
import Evaluation2 from "./components/Quiz/Evaluation2/Evaluation2";
import RootLayout from "./RootLayout";
import React, { useContext } from "react";
import { AuthContext } from "./store/auth-context";

const MainLogin = () => {
  return (
    <div>
      <div className="NavbarItems">
        <a target="_self" href="/SelectionScreen" rel="noreferrer">
          <img src={BUSOMIcon} className="BUSOMImageClass" alt="" />
        </a>
      </div>
      <Login />
    </div>
  );
};

/**React Router */
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: (
          <div>
            <Login />
          </div>
        ),
      },
      {
        path: "/Signup",
        element: (
          <div>
            <Signup />
          </div>
        ),
      },
      {
        path: "/ForgotPassword",
        element: (
          <div>
            <ForgotPassword />
          </div>
        ),
      },
      // {
      //   path: "/reports",
      //   element: (
      //     <div>
      //       <Navbar />
      //       <Reports />
      //     </div>
      //   ),
      // },
      {
        path: "/reports",
        element: (
          <div>
            <Navbar />
            <SidePanel />
          </div>
        ),
      },
      {
        path: "/Simulation1",
        element: (
          <div>
            <Navbar />
            <Simulation1 />
          </div>
        ),
      },
      {
        path: "/Simulation20",
        element: (
          <div>
            <Navbar />
            <Simulation2 />
          </div>
        ),
      },
      {
        path: "/Evaluation10",
        element: (
          <div>
            <Navbar />
            <Evaluation1 />
          </div>
        ),
      },
      {
        path: "/Evaluation20",
        element: (
          <div>
            <Navbar />
            <Evaluation2 />
          </div>
        ),
      },
    ],
  },
]);

function App() {
  const ctx = useContext(AuthContext);

  return (
    <React.Fragment>
      <main>
        {!ctx.isLoggedIn && <MainLogin /> && <RouterProvider router={router} />}
        {ctx.isLoggedIn && <SidePanel /> && <RouterProvider router={router} />}
      </main>
    </React.Fragment>
  );
}

export default App;
