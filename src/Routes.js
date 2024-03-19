import { createBrowserRouter  } from "react-router-dom";
import AuthenticatedLayout from "./layouts/AuthenticatedLayout";
import PostsLayout from "./layouts/PostsLayout";
import Chat from "./pages/Chat";
import Hashtags from "./pages/Hashtags";
import Home from "./pages/Home";
import Posts from "./wrapper/Posts";
import PostsFollowerWrapper from "./wrapper/PostsFollowerWrapper";
import Login from "./pages/auth/Login";
import GuestLayout from "./layouts/GuestLayout";
import ForgotPassword from "./pages/auth/ForgotPassword";


const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <AuthenticatedLayout />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                    
                    children: [
                        {
                            path: "/",
                            element: <PostsLayout />,
                            children: [
                                {
                                    path: "/",
                                    element: <Posts />,
                                    index: true, 
                                },
                                {
                                    path: "/follows",
                                    element: <PostsFollowerWrapper />,
                                }
                            ]
                        }
                    ]
                },
                {
                    path: "/chat",
                    element: <Chat />
                },
                {
                    path: "/hashtag",
                    element: <Hashtags />,
                    children: [
                      {
                        path: ":hashtag",
                        element: <Hashtags />,
                      },
                    ],
                  }
            ]
        },
        {
            path:'/auth',
            element:<GuestLayout />,
            children:[
                {
                    path:'/auth',
                    element: <Login />,
                    index:true,
                },
                {
                    path: '/auth/forgot-password/:mail?',
                    element:<ForgotPassword />
                }
            ]
        }
    ]
)

export default router;