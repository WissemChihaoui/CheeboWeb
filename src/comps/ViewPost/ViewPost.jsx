
import React, { useState } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Avatar,
    IconButton,
    Typography,
    Card,
} from "@material-tailwind/react";
import { IconPaw } from "@tabler/icons-react";
import { Link } from "react-router-dom";
const ViewPost = ({
    avatar,
    username,
    imageUrl,
    likes,
    numberComments,
    myLike
}) => {
    const [iLike, setILike] = useState(myLike);
    const handleDownloadClick = () => {
        fetch(imageUrl)
            .then((response) => response.blob())
            .then((blob) => {
                const link = document.createElement("a");
                link.href = URL.createObjectURL(blob);
                link.download = "cheebo-image.jpg";
                link.click();
            });
    };

    return (
        <React.Fragment>
            <DialogHeader className="justify-between bg-card">
                <div className="flex items-center gap-3">
                    <Avatar
                        size="sm"
                        variant="circular"
                        alt={username}
                        src={avatar}
                    />
                    <div className="-mt-px flex flex-col">
                        <a href={"/user/id"}>
                            <Typography
                                variant="small"
                                color=""
                                className="font-semibold text-lg dark:text-white"
                            >
                                {username}
                            </Typography>
                        </a>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <IconButton
                        variant="text"
                        size="lg"
                        
                        onClick={() => setILike(!iLike)}
                    >
                         <IconPaw className={`${iLike ? "text-primary":"text-secondary"}`} />
                    </IconButton>
                    <Button className="dark:bg-primary" size="sm" onClick={handleDownloadClick}>
                        Download
                    </Button>
                </div>
            </DialogHeader>
            <DialogBody className="bg-card">
                <img
                    alt="nature"
                    className="h-[48rem] w-full rounded-lg object-cover object-center "
                    src={imageUrl}
                />
            </DialogBody>
            <DialogFooter className="justify-between bg-card">
                <div className="flex items-center gap-16">
                    <div>
                        <Typography variant="small" color="white" className="font-normal">
                            Pow
                        </Typography>
                        <Typography color="blue-white" className="font-medium text-lg">
                            {likes}
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="small" color="white" className="font-normal">
                            Comments
                        </Typography>
                        <Typography color="blue-white" className="font-medium text-lg">
                            {numberComments}
                        </Typography>
                    </div>
                </div>
                <Button
                    size="sm"
                    variant="outlined"
                    
                    className="mr-5 flex items-center dark:text-white dark:border-white"
                >
                    Save into collections
                </Button>
            </DialogFooter>
        </React.Fragment>
    );
};

export default ViewPost;
