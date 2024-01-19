import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/dashboard",
    element: <Dashboard/>,
  },
]);
function App() {
  return <div className="">
    <RouterProvider router={router} />
  </div>;
}

export default App;
