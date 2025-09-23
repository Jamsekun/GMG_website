import React from "react";
import { NavLink } from "react-router-dom";

interface User {
  id: string;
  email: string;
  role: string;
}

interface LoginButtonProps {
  className?: string;
  isLoggedIn: boolean;
  user: User | null;
  onLogout: () => void;
}

export const LoginButton: React.FC<LoginButtonProps> = ({
  className = "",
  isLoggedIn,
  user,
  onLogout,
}) => {
  if (isLoggedIn) {
    return (
      <div className={`flex items-center space-x-2 sm:space-x-4 ${className}`}>
        <span
          className="text-white font-lato text-center font-normal tracking-wide leading-7 text-base sm:text-xl truncate max-w-[150px]"
        >
          Welcome, {user?.email}
        </span>
        <button
          onClick={onLogout}
          className="bg-primary-dark hover:bg-yellow-800 text-white font-lato text-center font-normal tracking-wide leading-7 px-3 py-1 sm:px-4 sm:py-2 rounded-md transition-colors text-base sm:text-xl"
        >
          Logout
        </button>
      </div>
    );
  } else {
    return (
      <NavLink
        to="/login"
        className={`bg-primary-dark hover:bg-yellow-800 text-white font-lato text-center font-normal tracking-wide leading-7 px-3 py-1 sm:px-4 sm:py-2 rounded-md transition-colors text-base sm:text-xl ${className}`}
      >
        Login
      </NavLink>
    );
  }
};