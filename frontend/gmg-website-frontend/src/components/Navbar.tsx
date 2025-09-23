import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavBarContainer } from "./NavBarContainer";
import { NavigationLinks } from "./NavigationLinks";
import { LoginButton } from "./LoginButton";
import { Menu, X } from "lucide-react";

interface User {
  id: string;
  email: string;
  role: string;
}

export const NavBar: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");
    if (token && userData) {
      setIsLoggedIn(true);
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUser(null);
    setIsMobileMenuOpen(false);
    navigate("/");
  };

  return (
    <NavBarContainer>
      <div className="hidden md:flex flex-grow justify-center">
        <NavigationLinks />
      </div>
      <div className="hidden md:flex">
        <LoginButton
          isLoggedIn={isLoggedIn}
          user={user}
          onLogout={handleLogout}
        />
      </div>
      <button
        className="md:hidden text-white"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <span className="sr-only">Toggle menu</span>
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-yellow-950 md:hidden py-4">
          <NavigationLinks />
          <div className="flex justify-center mt-4">
            <LoginButton
              isLoggedIn={isLoggedIn}
              user={user}
              onLogout={handleLogout}
            />
          </div>
        </div>
      )}
    </NavBarContainer>
  );
};

export default NavBar;