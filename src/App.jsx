import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Overlay from "./components/Overlay"
import RootLayout from "./pages/RootLayout"
import ErrorPage from "./ErrorPage";
import Home from "./pages/Home";
import PostPage from "./pages/PostPage";
import NewPostPage from "./pages/NewPostPage"
import Blogger from "./pages/Bloggers";
import UserPage from "./pages/UserPage";
import UserPosts from "./pages/UserPosts";
import { postDataLoader, postLoader  } from "./Loaders";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home />, loader: postDataLoader },
      {
        path: "post/:postId",
        element: <PostPage />,
        loader: postLoader,
      },
      {
        path: "blogger/:id",
        element: <Blogger />,
      },
    ],
  },
  {
    path: "/user/:id",
    element: <UserPage />,
    children: [
      {
        path: "newpost",
        element: <NewPostPage />,
      },
      {
        path: "all/:userId",
        element: <UserPosts />,
      },
    ],
  },
]);



function App() {
  
  return (
    <>
      <ToastContainer />
      <Overlay />
      <RouterProvider router = {Router} />
    </>
  );
}

export default App;

