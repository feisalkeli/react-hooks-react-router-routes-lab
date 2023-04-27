import React from "react";
import {
  Route,
  Switch,
  CreateBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

const router = CreateBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/movies", element: <Movies /> },
      { path: "/directors", element: <Directors /> },
      { path: "/actors", element: <Actors /> },
    ],
  },
]);
function App() {
  return (
    <div>
      <RouterProvider route={router} />
    </div>
  );
}

export default App;
