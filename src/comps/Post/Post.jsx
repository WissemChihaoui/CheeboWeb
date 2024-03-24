import React, { useState, useEffect } from "react";
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

import PostsData from "../../data/PostsData";
import { Link } from "react-router-dom";
import { formatHashtags } from "../../libs/hashtagWrapper";
const Post = ({id}) => {
  const [iLike, setILike] = useState(false);
  const [pawNumber, setPawNumber] = useState(0)
  const [openPostView, setOpenImageView] = useState(false);
  const [openPopover, setOpenPopover] = useState(false);

  const triggers = {
    onMouseEnter: () => setOpenPopover(true),
    onMouseLeave: () => setOpenPopover(false),
  };
  const handleViewPost = () => setOpenImageView((cur) => !cur);
 
  const post = PostsData.find(post => post.id === id);

  const calculateTimeDiff = createdAt => {
    const now = new Date();
    const created = new Date(createdAt);
    const diff = now - created;
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
  
    if (days > 3) {
      return created.toLocaleDateString(); // Display date if more than 3 days
    } else if (hours >= 24 && days <= 3) {
      return `${days} day${days !== 1 ? 's' : ''} ago`; // Display number of days if less than or equal to 3 days
    } else if (minutes >= 60 && hours < 24) {
      return `${hours} hour${hours !== 1 ? 's' : ''} ago`; // Display number of hours if less than 24 hours
    } else if (seconds >= 60 && minutes < 60) {
      return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`; // Display number of minutes if less than 60 minutes
    } else {
      return 'just now'; // Display just now if less than a minute
    }
  };

  useEffect(() => {
    if (post) {
      setPawNumber(post.paws.length);
    }
  }, [post]);

  const handleMyLike=()=>{
    setILike(!iLike);
    iLike? setPawNumber(pawNumber-1):setPawNumber(pawNumber+1)
  }
  const formatContent = content => {
    // Regular expression to find hashtags
    const regex = /#(\w+)/g;
    // Split content by hashtags
    const parts = content.split(regex);
    // Map parts to JSX elements
    return parts.map((part, index) => {
      if (part.match(regex)) {
        // Render hashtag as a Link
        const hashtag = part.replace('#', '');
        return <Link key={index} to={`/hashtag/${hashtag}`}>#{hashtag}</Link>;
      } else {
        // Render regular text
        return <span key={index}>{part}</span>;
      }
    });
  };
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
            <a className="dark:text-white font-semibold" href={`/user/${post.creature}`}>
              Jon Doe
            </a>
            <p className="text-secondary text-sm">Created {calculateTimeDiff(post.createdAt)}</p>
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
        <p className="dark:text-white">{formatHashtags(post.content)}</p>
      </div>

      <div className="mb-4">
        <img
          onClick={handleViewPost}
          src={post.picture}
          alt={post.content}
          className="w-full rounded-md h-full"
        />
      </div>

      {/* Likes and comments  */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <button onClick={()=>handleMyLike()} className="flex justify-center items-center gap-2 px-2 hover:bg-hover rounded-full p-1">
            
            <IconPaw className={`${iLike ? "text-primary":"text-secondary"}`} />
            <span className={`${iLike ? "dark:text-primary": "text-secondary"}  font-bold text-lg`}>{pawNumber} Paw</span>
          </button>
        </div>
        <button className="flex justify-center items-center gap-2 px-2 hover:bg-hover rounded-full p-1 text-secondary font-bold text-lg">
          <IconMessageCircle2 />
          <span>{post.comments.length} Comments</span>
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
