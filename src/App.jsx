import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import ForgetPassword from "./pages/ForgetPassword";
import Home from "./pages/Home";
import AuthPage from "./pages/AuthPage";

const App = () => {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/login",
      element: <AuthPage></AuthPage>,
    },
    {
      path: "/register",
      element: <AuthPage></AuthPage>,
    },
  ]);

  return (
      <RouterProvider router={myRouter} />

  );
};

export default App;
