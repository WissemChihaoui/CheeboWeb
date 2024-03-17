import { createBrowserRouter  } from "react-router-dom";
import AuthenticatedLayout from "./layouts/AuthenticatedLayout";
import PostsLayout from "./layouts/PostsLayout";
import Chat from "./pages/Chat";
import Home from "./pages/Home";
import Posts from "./wrapper/Posts";
import PostsFollowerWrapper from "./wrapper/PostsFollowerWrapper";


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
                }
            ]
        }
    ]
)

export default router;