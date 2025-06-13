import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

interface User {
  id: string;
  email: string;
  role: string;
}

const Navbar: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    if (token && userData) {
      setIsLoggedIn(true);
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUser(null);
    navigate('/');
  };

  return (
    <nav className="bg-amber-900 text-amber-50 p-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold tracking-tight hover:text-amber-200 transition-colors">
          ☕ Coffee & Carwash
        </NavLink>

        {/* Navigation Links */}
        <div className="flex items-center space-x-8">
          <ul className="flex space-x-8">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-amber-200 font-medium"
                    : "hover:text-amber-200 transition-colors"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive
                    ? "text-amber-200 font-medium"
                    : "hover:text-amber-200 transition-colors"
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/bookings"
                className={({ isActive }) =>
                  isActive
                    ? "text-amber-200 font-medium"
                    : "hover:text-amber-200 transition-colors"
                }
              >
                Bookings
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-amber-200 font-medium"
                    : "hover:text-amber-200 transition-colors"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Auth Buttons */}
          {isLoggedIn ? (
            <div className="flex items-center space-x-4">
              <span className="text-amber-200">Welcome, {user?.email}</span>
              <button
                onClick={handleLogout}
                className="bg-amber-700 hover:bg-amber-800 text-amber-50 px-4 py-2 rounded-md transition-colors border border-amber-600"
              >
                Logout
              </button>
            </div>
          ) : (
            <NavLink
              to="/login"
              className="bg-amber-700 hover:bg-amber-800 text-amber-50 px-4 py-2 rounded-md transition-colors border border-amber-600"
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
