import React, { useState } from "react";
import {
  Collapse,
  Popover,
  PopoverHandler,
  PopoverContent,
  
  Dialog,
} from "@material-tailwind/react";
import ProfilePopover from '../ProfilePopover/ProfilePopover'
import { IconDotsVertical, IconMessageCircle2 } from "@tabler/icons-react";
import Paw from '../../assets/PAW.png'
import DisPaw from '../../assets/PAW-1.png'
const Post = () => {
  const [iLike, setILike] = useState(false);

  const [openPopover, setOpenPopover] = React.useState(false);

  const triggers = {
    onMouseEnter: () => setOpenPopover(true),
    onMouseLeave: () => setOpenPopover(false),
  };

  const [open, setOpen] = React.useState(false);

  const toggleOpen = () => setOpen((cur) => !cur);
  //Dialog
  const [openImageView, setOpenImageView] = React.useState(false);

  const handleOpenImageView = () => setOpenImageView((cur) => !cur);

  return (
    <div className="bg-card dark:bg-dark-block p-4 rounded-lg shadow-md w-full h-max max-w-lg">
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
              className="z-50 max-w-[24rem] bg-card dark:bg-dark-block"
            >
              <ProfilePopover />
            </PopoverContent>
          </Popover>
          <div>
            <a className="text-primary font-semibold" href={`/user/1`}>
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
            <PopoverContent className="dark:bg-dark-bg z-20 flex flex-col gap-4 max-w-[300px] text-primary max-h-[600px]  border-none">
              <a href={"#"} className="flex gap-4 items-center text-[12px]">
                <span>Save in your collections</span>
              </a>
              <a href={"#"} className="flex gap-4 items-center text-[12px]">
                <span>Copy the post a</span>
              </a>
              <a href={"#"} className="flex gap-4 items-center text-[12px]">
                <span>Report the post</span>
              </a>
              <a href={"#"} className="flex gap-4 items-center text-[12px]">
                <span>Block this user</span>
              </a>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-primary"></p>
      </div>

      <div className="mb-4">
        <img
          src="https://cdn.pixabay.com/photo/2020/03/08/11/21/cat-4912211_1280.jpg"
          alt="Post Image"
          className="w-full rounded-md h-full"
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <button onClick={()=>setILike(!iLike)} className="flex justify-center items-center gap-2 px-2 hover:bg-hover rounded-full p-1">
            <img src={iLike ? Paw : DisPaw} className="w-8"/>
            <span className={`${iLike ? "text-primary": "text-secondary"}  font-bold text-lg`}>23 Paw</span>
          </button>
        </div>
        <button className="flex justify-center items-center gap-2 px-2 hover:bg-hover rounded-full p-1 text-secondary font-bold text-lg">
          <IconMessageCircle2 />
          <span>2 Comments</span>
        </button>
      </div>
    </div>
  );
};

export default Post;
