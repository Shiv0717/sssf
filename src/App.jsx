import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Donate from "./pages/Donate";
import NSDC from "./pages/NSDC";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "services", element: <Service/> },
      { path: "nsdc", element: <NSDC/>},
      { path: "donate", element: <Donate/>},
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
