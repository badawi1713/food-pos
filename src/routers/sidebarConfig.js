const {
  Home,
  Discount,
  Dashboard,
  Message,
  Notification,
  Setting,
} = require("assets/icons");

const sidebarMenu = [
  {
    id: "home",
    name: "Home",
    icon: <Home />,
    path: "/home",
  },
  {
    id: "discount",
    name: "Discount",
    icon: <Discount />,
    path: "/discount",
  },
  {
    id: "dashboard",
    name: "Dashboard",
    icon: <Dashboard />,
    path: "/dashboard",
  },
  {
    id: "Message",
    name: "Message",
    icon: <Message />,
    path: "/message",
  },
  {
    id: "notification",
    name: "Notification",
    icon: <Notification />,
    path: "/notification",
  },
  {
    id: "settings",
    name: "Settings",
    icon: <Setting />,
    path: "/settings",
  },
];

export { sidebarMenu };
