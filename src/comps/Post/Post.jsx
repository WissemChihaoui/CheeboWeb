import React, { useState } from "react";
import {
  Collapse,
  Popover,
  PopoverHandler,
  PopoverContent,
  
  Dialog,
} from "@material-tailwind/react";
import ProfilePopover from '../ProfilePopover/ProfilePopover'
import { IconDotsVertical, IconMessageCircle2, IconDeviceFloppy, IconLink,IconFlag2,IconBan, IconPaw } from "@tabler/icons-react";

import  ViewPost  from "../ViewPost/ViewPost";
const Post = () => {
  const [iLike, setILike] = useState(false);
  const [openPostView, setOpenImageView] = useState(false);
  console.log(openPostView)
  const [openPopover, setOpenPopover] = useState(false);

  const triggers = {
    onMouseEnter: () => setOpenPopover(true),
    onMouseLeave: () => setOpenPopover(false),
  };
  const handleViewPost = () => setOpenImageView((cur) => !cur);
 

  return (
    <div className="bg-card dark:bg-dark-block p-4 rounded-lg shadow-md w-full h-max max-w-2xl ">

      {/* Post Header  */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Popover
            open={openPopover}
            handler={setOpenPopover}
            placement={"bottom"}
          >
            <PopoverHandler {...triggers}>
              <img
                src="https://cdn.pixabay.com/photo/2020/03/08/11/21/cat-4912211_1280.jpg"
                alt="User Avatar"
                className="w-8 h-8 rounded-full"
              />
            </PopoverHandler>
            <PopoverContent
              {...triggers}
              className="z-50 max-w-[24rem] bg-card dark:bg-dark-block dark:border-gray-800"
            >
              <ProfilePopover />
            </PopoverContent>
          </Popover>
          <div>
            <a className="dark:text-white font-semibold" href={`/user/1`}>
              Jon Doe
            </a>
            <p className="text-secondary text-sm">2 hours ago</p>
          </div>
        </div>
        <div className="text-gray-500 cursor-pointer">
          <Popover placement="bottom-end">
            <PopoverHandler>
              <button className="hover:bg-hover rounded-full p-1">
                <IconDotsVertical />
              </button>
            </PopoverHandler>
            <PopoverContent className="dark:bg-dark-bg z-20 flex flex-col gap-4 max-w-[300px] dark:text-white max-h-[600px]  border-none">
              <a href={"#"} className="flex gap-4 items-center text-[12px]">
                <IconDeviceFloppy />
                <span>Save</span>
              </a>
             
              <a href={"#"} className="flex gap-4 items-center text-[12px]">
                <IconLink />
                <span>Copy link</span>
              </a>
              <a href={"#"} className="flex gap-4 items-center text-[12px]">
                <IconFlag2 />
                <span>Report</span>
              </a>
              
            </PopoverContent>
          </Popover>
        </div>
      </div>


    {/* Post Content  */}
      <div className="mb-4">
        <p className="dark:text-white">Hello ladies gentleman</p>
      </div>

      <div className="mb-4">
        <img
          onClick={handleViewPost}
          src="https://cdn.pixabay.com/photo/2020/03/08/11/21/cat-4912211_1280.jpg"
          alt="Post Image"
          className="w-full rounded-md h-full"
        />
      </div>

      {/* Likes and comments  */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <button onClick={()=>setILike(!iLike)} className="flex justify-center items-center gap-2 px-2 hover:bg-hover rounded-full p-1">
            
            <IconPaw className={`${iLike ? "text-primary":"text-secondary"}`} />
            <span className={`${iLike ? "dark:text-primary": "text-secondary"}  font-bold text-lg`}>23 Paw</span>
          </button>
        </div>
        <button className="flex justify-center items-center gap-2 px-2 hover:bg-hover rounded-full p-1 text-secondary font-bold text-lg">
          <IconMessageCircle2 />
          <span>2 Comments</span>
        </button>
      </div>

      {/* View Image Dialog  */}
      <Dialog size="md" open={openPostView} handler={handleViewPost} className="dark:bg-dark-block">
        <ViewPost avatar={"https://cdn.pixabay.com/photo/2020/03/08/11/21/cat-4912211_1280.jpg"} username={"Jon Doe"} imageUrl={"https://cdn.pixabay.com/photo/2020/03/08/11/21/cat-4912211_1280.jpg"} likes={"24"} numberComments={"3"} myLike={iLike}/>
      </Dialog>
    </div>
  );
};

export default Post;
