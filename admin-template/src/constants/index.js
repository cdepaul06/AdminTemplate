import {
  HomeIcon,
  UsersIcon,
  ShoppingCartIcon,
  CogIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";

import { useState, useEffect } from "react";

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
    icon: UsersIcon,
  },
  {
    id: "products",
    title: "Products",
    path: "/products",
    icon: ShoppingCartIcon,
  },
  {
    id: "revenue",
    title: "Revenue",
    path: "/revenue",
    icon: CurrencyDollarIcon,
  },
  {
    id: "settings",
    title: "Settings",
    path: "/settings",
    icon: CogIcon,
  },
];

const initialDashboardCards = [
  {
    id: "totalUsers",
    title: "Total Users",
    amount: 69,
    icon: UsersIcon,
  },
  {
    id: "totalProducts",
    title: "Total Products",
    amount: 602,
    icon: ShoppingCartIcon,
  },
  {
    id: "totalOrders",
    title: "Total Orders",
    amount: 404,
    icon: ShoppingCartIcon,
  },
  {
    id: "totalRevenue",
    title: "Total Revenue",
    amount: "10,000",
    icon: CurrencyDollarIcon,
  },
];

// ! This is to simulate data changes on the dashboard view, can be adjusted to use Redux or Context API
const useDashboardCards = () => {
  const [dashboardCards, setDashboardCards] = useState(initialDashboardCards);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDashboardCards((prevCards) => {
        return prevCards.map((card) => {
          const newamount =
            card.id === "totalRevenue"
              ? Math.floor(Math.random() * 100000)
              : Math.floor(Math.random() * 1000);
          return { ...card, amount: newamount };
        });
      });
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  return dashboardCards;
};

export { navLinks, useDashboardCards };
