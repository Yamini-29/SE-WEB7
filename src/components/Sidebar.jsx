import React from "react";
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
  CubeTransparentIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/24/solid";

export function SidebarWithBurgerMenu() {
  return (
    <div className="fixed inset-y-0 left-0 w-64 z-50 bg-black p-4 shadow-lg">
      <Card
        color="transparent"
        shadow={false}
        className="h-[calc(100vh-2rem)] w-full p-4"
      >
        <div className="mb-2 flex items-center gap-4 p-4">
          <img
            src="https://docs.material-tailwind.com/img/logo-ct-dark.png"
            alt="brand"
            className="h-8 w-8"
          />
          <Typography variant="h5" color="blue-gray">
            Sidebar
          </Typography>
        </div>

        <List>
          {/* Simulate */}
          <ListItem>
            <ListItemPrefix>
              <CubeTransparentIcon className="h-5 w-5" />
            </ListItemPrefix>
            <Link to="/simulate" className="text-gray-100">Simulate</Link>
          </ListItem>

          {/* Quiz */}
          <ListItem>
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5 text-white" />
            </ListItemPrefix>
            <Link to="/mainquiz" className="text-gray-100">Quiz</Link>
          </ListItem>

          {/* Community */}
          <ListItem>
            <ListItemPrefix>
              <ChatBubbleOvalLeftEllipsisIcon className="h-5 w-5" />
            </ListItemPrefix>
            <Link to="/community" className="text-gray-100">Community</Link>
          </ListItem>

          {/* Settings */}
          <ListItem>
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            <Link to="/settings" className="text-gray-100">Settings</Link>
          </ListItem>

          {/* Profile */}
          <ListItem>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            <Link to="/profile" className="text-gray-100">Profile</Link>
          </ListItem>

          {/* Logout */}
          <ListItem>
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            <Link to="/logout" className="text-gray-100">Log Out</Link>
          </ListItem>
        </List>
      </Card>
    </div>
  );
}