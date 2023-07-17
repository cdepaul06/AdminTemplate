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
    path: "/userAccounts",
    icon: UsersIcon,
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

const dashboardCards = [
  {
    id: "totalUsers",
    title: "Total Users",
    value: 69,
    icon: UsersIcon,
  },
  {
    id: "totalProducts",
    title: "Total Products",
    value: 602,
    icon: ShoppingCartIcon,
  },
  {
    id: "totalOrders",
    title: "Total Orders",
    value: 404,
    icon: ShoppingCartIcon,
  },
  {
    id: "totalRevenue",
    title: "Total Revenue",
    value: "10,000",
    icon: CurrencyDollarIcon,
  },
];

const initialDashboardCards = [
  {
    id: "totalUsers",
    title: "Total Users",
    value: 69,
    icon: UsersIcon,
  },
  {
    id: "totalProducts",
    title: "Total Products",
    value: 602,
    icon: ShoppingCartIcon,
  },
  {
    id: "totalOrders",
    title: "Total Orders",
    value: 404,
    icon: ShoppingCartIcon,
  },
  {
    id: "totalRevenue",
    title: "Total Revenue",
    value: "10,000",
    icon: CurrencyDollarIcon,
  },
];

const useDashboardCards = () => {
  const [dashboardCards, setDashboardCards] = useState(initialDashboardCards);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDashboardCards((prevCards) => {
        return prevCards.map((card) => {
          const newValue =
            card.id === "totalRevenue"
              ? Math.floor(Math.random() * 100000)
              : Math.floor(Math.random() * 1000);
          return { ...card, value: newValue };
        });
      });
    }, 5000);

    return () => clearInterval(intervalId);
  }, []); // Empty dependencies array to only run once

  return dashboardCards;
};

export { navLinks, useDashboardCards };
