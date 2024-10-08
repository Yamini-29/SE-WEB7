import React, { useState } from "react";
import { Link } from "react-router-dom";
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
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"; // Import arrow icons
import { FaArrowLeftLong } from "react-icons/fa6";

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
          <FaArrowLeftLong /> {/* Close arrow icon */}
        </button>

        <Card
          color="transparent"
          shadow={false}
          className="h-[calc(100vh-2rem)] w-full p-4"
        >
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
              <Link to="/" className="text-gray-100">Home</Link>
            </ListItem>

            <ListItem>
              <ListItemPrefix>
                <InboxIcon className="h-5 w-5 text-white" />
              </ListItemPrefix>
              <Link to="/mainquiz" className="text-gray-100">Quiz</Link>
            </ListItem>

            <ListItem>
              <ListItemPrefix>
                <ChatBubbleOvalLeftEllipsisIcon className="h-5 w-5 text-white" />
              </ListItemPrefix>
              <Link to="/community" className="text-gray-100">Community</Link>
            </ListItem>

            <ListItem>
              <ListItemPrefix>
                <Cog6ToothIcon className="h-5 w-5 text-white" />
              </ListItemPrefix>
              <Link to="/settings" className="text-gray-100">Settings</Link>
            </ListItem>

            <ListItem>
              <ListItemPrefix>
                <UserCircleIcon className="h-5 w-5 text-white" />
              </ListItemPrefix>
              <Link to="/profile" className="text-gray-100">Profile</Link>
            </ListItem>

            <ListItem>
              <ListItemPrefix>
                <PowerIcon className="h-5 w-5 text-white" />
              </ListItemPrefix>
              <Link to="/logout" className="text-gray-100">Log Out</Link>
            </ListItem>
          </List>
        </Card>
      </div>

      {/* Toggle Button for Opening Sidebar */}
      {!isOpen && (
        <button
  onClick={toggleSidebar}
  className="fixed top-6 left-4 z-50 p-4 bg-violet-900 text-white rounded flex items-center gap-3 text-xl"
>
  MENU
  <FaArrowRight className="w-6 h-6" /> {/* Larger Open arrow icon */}
</button>


      )}

      {/* Main Content Area */}
      <div className={`flex-1 ${isOpen ? "ml-64" : "ml-0"} transition-all duration-300`}>
        {/* Your main content goes here */}
      </div>
    </div>
  );
}
