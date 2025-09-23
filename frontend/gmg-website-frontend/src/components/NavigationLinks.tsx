import React from "react";
import { NavLink } from "react-router-dom";

interface NavigationLinksProps {
  className?: string;
}

export const NavigationLinks: React.FC<NavigationLinksProps> = ({
  className = "",
}) => {
  const navItems = [
    { label: "HOME", to: "/" },
    { label: "CAR WASH", to: "/carwash" },
    { label: "COFFEE", to: "/product" },
    { label: "ABOUT US", to: "/aboutus" },
  ];

  return (
    <nav
      className={`flex gap-6 sm:gap-8 max-md:flex-col max-md:items-center ${className}`}
    >
      {navItems.map((item, index) => (
        <NavLink
          key={index}
          to={item.to}
          className={({ isActive }) =>
            `text-white font-lato text-center font-normal tracking-wide leading-7 text-base sm:text-xl ${
              isActive ? "font-medium" : "hover:text-orange-200 transition-colors"
            }`
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
};