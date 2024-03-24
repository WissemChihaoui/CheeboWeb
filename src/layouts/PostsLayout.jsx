import React, { useState, useEffect } from "react";
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
import { Link, NavLink, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";

const PostsLayout = () => {

  const navigate = useNavigate()

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
      <Tabs value={useLocation().pathname} className="z-1 relative">
        <TabsHeader className="rounded-none max-w-2xl m-auto bg-transparent p-0 dark:text-white w-full">
          {data.map(({ label, value, link }) => {
            console.log({ label, value, link });
            return (
              <Tab
                key={value}
                value={value}
                onClick={() => navigate(link)}
                className={`ease-in duration-300 text-xl font-bold text-white has-[.isActive]:text-gray-900`}
              >
                <NavLink
                  to={link}
                  className={({ isActive }) => isActive && "isActive"}
                >
                  {label}
                </NavLink>
              </Tab>
            );
          })}
        </TabsHeader>
        <TabsBody>
          <Outlet />
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default PostsLayout;
