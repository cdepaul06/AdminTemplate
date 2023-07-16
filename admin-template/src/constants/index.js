import {
  HomeIcon,
  UserIcon,
  ShoppingCartIcon,
  CogIcon,
} from "@heroicons/react/24/solid";

const navLinks = [
  {
    id: "dashboard",
    title: "Dashboard",
    path: "/",
    icon: HomeIcon,
    exact: true,
  },
  {
    id: "users",
    title: "Users",
    path: "/users",
    icon: UserIcon,
    exact: true,
  },
  {
    id: "products",
    title: "Products",
    path: "/products",
    icon: ShoppingCartIcon,
    exact: true,
  },
  {
    id: "settings",
    title: "Settings",
    path: "/settings",
    icon: CogIcon,
    exact: true,
  },
];

export { navLinks };
