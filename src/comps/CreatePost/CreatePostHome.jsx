import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Textarea,
  IconButton,
  Menu,
  MenuHandler,
  Input,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { IconHash, IconPhotoPlus, IconPlus, IconX } from "@tabler/icons-react";
import React, { useRef, useState } from "react";
import { topicsHashtag } from "../../data/hashtag";
const CreatePostHome = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);
  const [textareaContent, setTextareaContent] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [filteredItems, setFilteredItems] = useState(topicsHashtag);
  const [displayLimit, setDisplayLimit] = useState(5);
  
  const handleSearchInputChange = (e) => {
    const inputValue = e.target.value.toLowerCase();
    const filtered = topicsHashtag.filter((item) =>
      item.toLowerCase().includes(inputValue)
    );
    setSearchValue(inputValue);
    setFilteredItems(filtered);
  };
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
              value={textareaContent}
              onChange={(e) => setTextareaContent(e.target.value)}
            />
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <div>
            {selectedImage && (
              <div className="flex w-max">
                <img
                  src={selectedImage}
                  alt="Selected"
                  className="max-h-20 rounded-l"
                />
                <IconButton
                  color="red"
                  className="rounded-l-none"
                  onClick={() => setSelectedImage(null)}
                >
                  <IconX className="w-5" />
                </IconButton>
              </div>
            )}
          </div>
          <div className="flex w-full justify-between py-1.5">
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            <div className="flex gap-3">
              <IconButton
                variant="text"
                color="blue-gray"
                size="sm"
                onClick={handleButtonClick}
              >
                <IconPhotoPlus />
              </IconButton>
              <Menu
                dismiss={{
                  itemPress: false,
                }}
              >
                <MenuHandler>
                  <IconButton
                    variant="text"
                    color="blue-gray"
                    size="sm"
                    className="p-3 bg-transparent"
                  >
                    <IconHash />
                  </IconButton>
                </MenuHandler>
                <MenuList className="dark:bg-dark-bg dark:text-white">
                  <Input
                    label="Search"
                    value={searchValue}
                    onChange={handleSearchInputChange}
                    className="text-primary bg-hover bg-opacity-100"
                    containerProps={{
                      className: "mb-4",
                    }}
                  />
                  {filteredItems.slice(0, displayLimit).map((item, index) => (
                    <MenuItem
                      key={index}
                      onClick={() => {
                        setTextareaContent(
                          (prevContent) => prevContent + `#${item} `
                        );
                      }}
                    >
                      {item}
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
            </div>
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
