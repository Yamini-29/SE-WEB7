import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsCameraVideo, BsMenuButtonFill } from "react-icons/bs";
import {
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Card,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";
import { FaBars, FaBook } from "react-icons/fa"; // React Menu Icon for the button
import { FaArrowLeftLong } from "react-icons/fa6"; // Close button
import { HiAcademicCap } from "react-icons/hi2";
export function SidebarWithBurgerMenu() {
  const [isOpen, setIsOpen] = useState(false); // State to manage sidebar visibility

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle the sidebar's open/close state
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 bg-black p-4 shadow-lg transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        {/* Close Button Inside Sidebar */}
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 z-50 p-2 bg-gray-800 text-white rounded"
        >
          <FaArrowLeftLong className="w-4 h-4" /> {/* Adjusted Close arrow icon size */}
        </button>

        <Card color="transparent" shadow={false} className="h-[calc(100vh-2rem)] w-full p-4">
          <div className="mb-2 flex items-center gap-4 p-4 text-white">
            <img
              src="https://docs.material-tailwind.com/img/logo-ct-dark.png"
              alt="brand"
              className="h-8 w-8 text-white"
            />
            <Typography variant="h5" color="blue-gray">
              Sidebar
            </Typography>
          </div>

          <List>
            <ListItem>
              <ListItemPrefix>
                <HomeIcon className="h-5 w-5 text-white" />
              </ListItemPrefix>
              <Link to="/" className="text-gray-100" onClick={() => setIsOpen(false)}>Home</Link>
            </ListItem>

            <ListItem>
              <ListItemPrefix>
                <InboxIcon className="h-5 w-5 text-white" />
              </ListItemPrefix>
              <Link to="/mainquiz" className="text-gray-100" onClick={() => setIsOpen(false)}>Quiz</Link>
            </ListItem>

            <ListItem>
              <ListItemPrefix>
                <ChatBubbleOvalLeftEllipsisIcon className="h-5 w-5 text-white" />
              </ListItemPrefix>
              <Link to="/community" className="text-gray-100" onClick={() => setIsOpen(false)}>Community</Link>
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <FaBook className="h-5 w-5 text-white" />
              </ListItemPrefix>
              <Link to="/tutorials" className="text-gray-100" onClick={() => setIsOpen(false)}>Tutorials</Link>
            </ListItem>

            <ListItem>
              <ListItemPrefix>
                <Cog6ToothIcon className="h-5 w-5 text-white" />
              </ListItemPrefix>
              <Link to="/collection" className="text-gray-100" onClick={() => setIsOpen(false)}>Simulators</Link>
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <HiAcademicCap className="h-5 w-5 text-white" />
              </ListItemPrefix>
              <Link to="/contest" className="text-gray-100" onClick={() => setIsOpen(false)}>Contest</Link>
            </ListItem>

            <ListItem>
              <ListItemPrefix>
                <UserCircleIcon className="h-5 w-5 text-white" />
              </ListItemPrefix>
              <Link to="/leaderboard" className="text-gray-100" onClick={() => setIsOpen(false)}>Leaderboard</Link>
            </ListItem>

          </List>
        </Card>
      </div>

      {/* Toggle Button for Opening Sidebar */}
      {!isOpen && (
        <button
          onClick={toggleSidebar}
          className="fixed top-6 left-4 z-50 p-4  text-white rounded flex items-center justify-center text-xl"
        >
          <BsMenuButtonFill className="w-10 h-10" /> {/* React Menu Icon */}
        </button>
      )}

      {/* Main Content Area */}
      <div className={`flex-1 ${isOpen ? "ml-64" : "ml-0"} transition-all duration-300`}>
        {/* Your main content goes here */}
      </div>
    </div>
  );
}
