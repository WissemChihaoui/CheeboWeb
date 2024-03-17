import React from "react";
import { 
    Button,
    Avatar,
    Typography } from "@material-tailwind/react";
import Messagerie from "../../assets/Messagerie.png"
import {IconUserPlus} from "@tabler/icons-react";
import { Link } from "react-router-dom";
const ProfilePopover = () => {
  return (
    <React.Fragment>
      <div className="mb-2 flex items-center gap-4">
        <Avatar
          size="md"
          variant="circular"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          alt="tania andrew"
        />
        {/* <Button variant="gradient" size="sm" className="font-medium capitalize">
          Follow
        </Button> */}
        <Typography
        variant="h5"
        
        className="mb-2 flex flex-col gap-1 font-medium dark:text-white"
      >
        <a href={'/user/id'}>Tania Andrew</a>
        <span className="text-sm font-medium text-gray-300">
          Tunisia
        </span>
      </Typography>
      </div>
      
      <Typography
        variant="small"
        color="gray"
        className="font-normal text-gray-300"
      >
        Frontend Developer • Major interest in Web Development: motivated to
        achieve measurable results, to deepen my knowledge and improve my
        skills.
      </Typography>
      <div className="mt-6 flex items-center gap-4 border-t border-blue-gray-50 dark:border-gray-800 pt-4">
        <Button
          variant="small"
          color="gray"
          className="flex justify-center items-center gap-3  text-sm font-normal text-gray-300 flex-1"
        >
          <IconUserPlus className="text-primary"/>
          <span className="text-base font-semibold capitalize mr-4">Add Friend</span>
        </Button>
        <Button
          variant="small"
          color="gray"
          className="flex items-center gap-2 text-sm font-normal text-gray-300"
        >
          <img src={Messagerie} alt="send message" className="w-6"/>
          
        </Button>
      </div>
    </React.Fragment>
  );
};

export default ProfilePopover;