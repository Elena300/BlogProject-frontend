import { createBrowserRouter, RouterProvider  } from "react-router-dom";
import Overlay from "./components/Overlay"
import RootLayout from "./pages/RootLayout"
import ErrorPage from "./ErrorPage";
import Home from "./pages/Home";
import PostPage from "./pages/PostPage";
import NewPostPage from "./pages/NewPostPage"
import Blogger from "./pages/Bloggers";
import UserArea from "./pages/UserArea";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, 
        element: <Home /> },
      {
        path: "post/:id",
        element: <PostPage />,
      },
      {
        path: "blogger/:id",
        element: <Blogger />,
      },
    ],
  },
  {
    path: "/user/:id",
    element: <UserArea />,
    children: [
      {
        path: "new post",
        element: <NewPostPage />,
      },
    ],
  },
]);



function App() {
  
  return (
    <>
      <Overlay />
      <RouterProvider router = {Router} />
    </>
  );
}

export default App;

