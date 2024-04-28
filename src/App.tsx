import { Toaster } from "react-hot-toast";
import UplodePage from "./page/UplodePage";
import Dashbord from "./page/Dashbord";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Category from "./page/Category";

const routes = [
  {
    path: "/",
    element: <Dashbord />,
  },
  {
    path: "/dash",
    element: <Dashbord />,
  },
  {
    path: "/upload",
    element: <UplodePage />,
  },
  {
    path: "/category",
    element: <Category />,
  },
  // {
  //   path: "",
  //   element: <SignupLogin />,
  //   children: [
  //     {
  //       path: "/login",
  //       element: <Login />,
  //     },
  //   ],
  // },
];
const router = createBrowserRouter(routes);
function App() {
  return (
    <div className="bg-slate-200">
      <>
        <RouterProvider router={router}></RouterProvider>
      </>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default App;
