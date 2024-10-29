import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AuthPage from "./pages/AuthPage";
import ForgetPassword from "./pages/ForgetPassword";

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
    {
      path: "/forget-password",
      element: <ForgetPassword></ForgetPassword>,
    },
  ]);

  return (
      <RouterProvider router={myRouter} />

  );
};

export default App;
