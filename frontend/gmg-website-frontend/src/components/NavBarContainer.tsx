import React from "react";

interface NavBarContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const NavBarContainer: React.FC<NavBarContainerProps> = ({
  children,
  className = "",
}) => {
  return (
    <header
      className={`sticky top-0 z-50 bg-yellow-950 text-orange-100 shadow-lg w-full ${className}`}>
      <div className="container mx-auto flex justify-between items-center px-4 py-3 sm:px-6">
        {children}
      </div>
    </header>
  );
};