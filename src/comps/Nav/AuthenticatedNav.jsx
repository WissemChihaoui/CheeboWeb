import React, { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import {
  IconHome,
  IconMessage,
  IconRibbonHealth,
  IconCat,
  IconMoon,
  IconSun,
  IconBell,
  IconBuildingStore,
  IconSunMoon,
  IconMoon2
} from "@tabler/icons-react";
import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  MoonIcon,
  PencilSquareIcon,
  Bars2Icon,
  SunIcon,
} from "@heroicons/react/24/solid";
import { LogoFull } from "../Logo/LogoFull";
import { HealthMass } from "../../assets/Health-Mass.png"
import { Link,useLocation  } from "react-router-dom";

// profile menu component
const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
  },
  {
    label: "Edit Profile",
    icon: PencilSquareIcon,
  },
  
  
  {
    label: "Settings",
    icon: Cog6ToothIcon,
  },
  {
    label: "Contact Us",
    icon: LifebuoyIcon,
  },
  
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  return (
    <div className="flex items-center gap-3">
      <Typography as="a" href="#">
        <div></div>
      </Typography>

      <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
        <MenuHandler>
          <Button
            variant="text"
            color="blue-gray"
            className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 "
          >
            <Avatar
              variant="circular"
              size="sm"
              alt="tania andrew"
              className="border border-gray-900 p-0.5"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            />
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`h-3 w-3 transition-transform ${
                isMenuOpen ? "rotate-180" : ""
              }`}
            />
          </Button>
        </MenuHandler>
        <MenuList className="p-1 dark:bg-dark-block dark:text-white">
         

          {profileMenuItems.map(({ label, icon }, key) => {
            const isLastItem = key === profileMenuItems.length - 1;
            return (
              <MenuItem
                key={label}
                onClick={closeMenu}
                className={`flex items-center gap-2 rounded ${
                  isLastItem
                    ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                    : ""
                }`}
              >
                {React.createElement(icon, {
                  className: `h-4 w-4 ${isLastItem ? "text-red-500 font-bold" : ""}`,
                  strokeWidth: 2,
                })}
                <Typography
                  as="span"
                  variant="small"
                  className="font-normal"
                  color={isLastItem ? "red" : "inherit"}
                >
                  {label}
                </Typography>
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    </div>
  );
}

function ThemeMood(){
  const [isMoodMenuOpen, setIsMoodMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const closeMenu = () => setIsMoodMenuOpen(false);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("moon");
    } else if(theme === "light") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.remove("moon");
    }else if(theme === "moon"){
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("moon");
    }
  }, [theme]);

  const handleThemeChange = (theme) => {
    setTheme(theme);
  };
  return (
    <Menu
      open={isMoodMenuOpen}
      handler={setIsMoodMenuOpen}
      placement="bottom-end"
    >
      <MenuHandler>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          className="ml-auto mr-2 dark:text-white"
        >
          <IconSunMoon className="h-6 w-6" />
        </IconButton>
      </MenuHandler>
      <MenuList className="p-1 dark:bg-dark-block dark:text-white">
  <MenuItem
    key={"light-mode"}
    onClick={() => handleThemeChange("light")}
    className={`flex item-center gap-2 rounded ${theme === "light"? "bg-primary text-black" : ""}`}
    disabled={theme === "light"}
  >
    <IconSun className="" strokeWidth={2} />
    <Typography as="span" variant="small" className="font-normal" color="inherit">
      Light Mode
    </Typography>
  </MenuItem>
  <MenuItem
    key={"dark-mode"}
    onClick={() => handleThemeChange("dark")}
    className={`flex item-center gap-2 rounded ${theme === "dark"? "bg-primary text-white" : ""}`}
    disabled={theme === "dark"}
  >
    <IconMoon className="" strokeWidth={2} />
    <Typography as="span" variant="small" className="font-normal" color="inherit">
      Dark Mode
    </Typography>
  </MenuItem>
  <MenuItem
    key={"moon-mode"}
    onClick={() => handleThemeChange("moon")}
    className={`flex item-center gap-2 rounded ${theme === "moon"? "bg-primary" : ""}`}
    disabled={theme === "moon"}
  >
    <IconMoon2 className="" strokeWidth={2} />
    <Typography as="span" variant="small" className="font-normal" color="inherit">
      Moon Mode
    </Typography>
  </MenuItem>
</MenuList>

    </Menu>
  );
}

// nav list component
const navListItems = [
  {
    label: "Home",
    icon: <IconHome />,
    link:["/","/follows"],
  },
  {
    label: "Chats",
    icon: <IconMessage />,
    link:["/chat"]
  },
  {
    label: "Health Care",
    icon: <IconRibbonHealth />,
    link:["/health"]
  },
  {
    label: "Cheebo Store",
    icon: <IconBuildingStore />,
    link:["/health"]
  },
  {
    label: "Adoption",
    icon: <IconCat />,
    link:["/adoption"]
  },
];

function NavList() {
  const location = useLocation();
  return (
    <ul className="mt-2 mb-4 flex flex-col lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      
      {navListItems.map(({ label, icon, link }, key) => (
        <Typography
          key={label}
          as="span"
         
          variant="small"
          color="gray"
          className="font-medium text-white dark:text-blue-gray-500"
        >
          <Link to={link[0]} className={link.includes(location.pathname)? "pointer-events-none":""}>
          <MenuItem className={`${
                link.includes(location.pathname) ? "border-b-primary border-b-4 pointer-events-none" : ""
              } flex items-center gap-2 lg:rounded lg:px-8 dark:text-white dark:hover:text-black dark:hover:bg-secondary  dark:active:text-white focus:bg-none active:bg-none `}>
            <Tooltip content={label}>{icon}</Tooltip>
            <Typography
              as={"span"}
              className="lg:hidden"
              >
                {label}
              </Typography>
          </MenuItem>
          </Link>
        </Typography>
      ))}
    </ul>
  );
}

export function AuthenticatedNav() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <Navbar className="w-full fixed z-[100] left-1/2 -translate-x-1/2 m-auto p-2 lg:pl-6 bg-primary border-transparent dark:bg-dark-block dark:border-gray-800 moon:bg-primary rounded-none lg:rounded-md">
      <div className="relative  flex  items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 ml-2 cursor-pointer py-1.5 font-medium dark:text-white"
        >
          <LogoFull className="max-w-24 outline-none"/>
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        
        <div className="flex gap-1 items-center
        ">
          <ThemeMood />
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
         
          className="ml-auto mr-2 dark:text-white"
        >
          <IconBell className="h-6 w-6" />
        </IconButton>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden dark:text-white"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>

        <ProfileMenu />
        </div>
      </div>
      <MobileNav open={isNavOpen} className="overflow-scroll">
        <NavList />
      </MobileNav>
    </Navbar>
  );
}
