import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Textarea,
  IconButton,
} from "@material-tailwind/react";
import { IconPhotoPlus, IconPlus, IconX } from "@tabler/icons-react";
import React, { useRef, useState } from "react";

const CreatePostHome = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const fileInputRef = useRef(null);
  
    const handleButtonClick = () => {
      fileInputRef.current.click();
    };
  
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      setSelectedImage(URL.createObjectURL(file));
    };
  return (
    <React.Fragment>
      <Card className="dark:bg-dark-block max-w-2xl w-full z-0">
        <CardBody>
          <Typography variant="h5" color="white" className="mb-2">
            Share Something Cute
          </Typography>
          <div className="relative w-">
            <Textarea
              variant="static"
              className="text-white text-lg dark:border-white"
              placeholder="Wish you all a great day ... "
              rows={4}
            />
          </div>
        </CardBody>
        <CardFooter className="pt-0">
        <div>
                {selectedImage && (
                    <div className="flex w-max">
                        <img src={selectedImage} alt="Selected" className="max-h-20 rounded-l" />
                        <IconButton  color="red" className="rounded-l-none" onClick={()=>setSelectedImage(null)}>
                            <IconX  className="w-5"/>
                        </IconButton>
                    </div>
                )}
            </div>
          <div className="flex w-full justify-between py-1.5">
                <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
            <IconButton variant="text" color="blue-gray" size="sm" onClick={handleButtonClick}>
              <IconPhotoPlus />
            </IconButton>
            
            <div className="flex gap-2">
              <Button size="md" className="rounded-md bg-primary">
                Post
              </Button>
            </div>
          </div>
        </CardFooter>
      </Card>
    </React.Fragment>
  );
};

export default CreatePostHome;
