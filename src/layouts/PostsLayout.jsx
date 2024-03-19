import React, {useState, useEffect} from "react";
import CreatePostHome from "../comps/CreatePost/CreatePostHome";
import Post from "../comps/Post/Post";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Posts from "../wrapper/Posts";
import PostsFollowerWrapper from "../wrapper/PostsFollowerWrapper";
import { Link, Outlet, useLocation } from "react-router-dom";

const PostsLayout = () => {
  const [activeTab, setActiveTab] = useState(null);
  const location = useLocation();
  
  useEffect(() => {
    // Extract pathname from location
    const pathname = location.pathname;
    console.log(pathname)
    // Set activeTab based on pathname
    setActiveTab(pathname);
  });
  const data = [
    {
      label: "All Posts",
      link: "/",
      value: "/",
      element: <Posts />,
    },
    {
      label: "Following",
      link: "/follows",
      value: "/follows",
      element: <PostsFollowerWrapper />,
    },
  ];
  return (
    <div className="flex flex-col gap-4 items-center">
      <CreatePostHome />
      <Tabs value={activeTab} className="z-1 relative">
        <TabsHeader className="rounded-none max-w-2xl m-auto bg-transparent p-0 dark:text-white w-full">
          {data.map(({ label, value, link }) => (
            <Link to={link} className="w-full">
            <Tab key={value} value={value} onClick={() => setActiveTab(value)} className={`ease-in duration-300 text-xl font-bold ${activeTab === value ? "text-gray-900" : "text-white"}`}>
              {label}
            </Tab>
            </Link>
          ))}
        </TabsHeader>
        <TabsBody>
          <Outlet />
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default PostsLayout;
