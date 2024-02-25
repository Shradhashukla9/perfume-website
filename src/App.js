import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./header";
import Body from "./Body";
import Profile from "./components/Profile";
import Footer from "./footer";
import Error from "./components/Error";
import { createBrowserRouter,RouterProvider, Outlet } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Cart from "./components/Cart";

const App = ()=>(
  <>
    <Header />
    <Outlet />
    <Footer/>
  </>
);
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Body/>,
      },
      {
        path: "/AboutUs",
        element: <AboutUs/>,
        children:[
          {
            path:"/AboutUs/Profile",
            element: <Profile/>,
          },
        ],
      },
      {
        path: "/Contact",
        element: <Contact/>,
      },
      {
        path: "/Cart",
        element: <Cart/>,
      },

    ]
  }
]
  
 );
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
