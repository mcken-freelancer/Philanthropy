import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Donate from "./pages/Donate";
import DonateSingle from "./pages/DonateSingle";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/blog-post",
    element: <BlogPost />,
  },
  {
    path: "/donate",
    element: <Donate />,
  },
  {
    path: "/donate-single",
    element: <DonateSingle />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
