import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Users, Calendar, Trophy, User, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Define navigation links based on user role
  const getNavLinks = () => {
    if (!user) {
      return [
        { name: 'Home', path: '/', icon: <Home size={20} /> },
        { name: 'Features', path: '/features', icon: <Trophy size={20} /> },
        { name: 'About', path: '/about', icon: <Users size={20} /> },
      ];
    }

    const commonLinks = [
      { name: 'Dashboard', path: `/${user.role}/dashboard`, icon: <Home size={20} /> },
    ];

    switch (user.role) {
      case 'fan':
        return [
          ...commonLinks,
          { name: 'Live Matches', path: '/fan/live-matches', icon: <Trophy size={20} /> },
          { name: 'Schedule', path: '/fan/schedule', icon: <Calendar size={20} /> },
          { name: 'Players', path: '/fan/players', icon: <Users size={20} /> },
        ];
      case 'organizer':
        return [
          ...commonLinks,
          { name: 'Create Match', path: '/organizer/create-match', icon: <Trophy size={20} /> },
          { name: 'Manage Teams', path: '/organizer/teams', icon: <Users size={20} /> },
          { name: 'Schedule', path: '/organizer/schedule', icon: <Calendar size={20} /> },
        ];
      case 'admin':
        return [
          ...commonLinks,
          { name: 'Users', path: '/admin/users', icon: <Users size={20} /> },
          { name: 'Matches', path: '/admin/matches', icon: <Trophy size={20} /> },
          { name: 'Reports', path: '/admin/reports', icon: <Calendar size={20} /> },
        ];
      case 'player':
        return [
          ...commonLinks,
          { name: 'My Stats', path: '/player/stats', icon: <Trophy size={20} /> },
          { name: 'Schedule', path: '/player/schedule', icon: <Calendar size={20} /> },
          { name: 'My Team', path: '/player/team', icon: <Users size={20} /> },
        ];
      default:
        return commonLinks;
    }
  };

  const navLinks = getNavLinks();

  return (
    <nav className="bg-[#0B0B0B] text-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Trophy className="h-8 w-8 text-[#DC143C]" />
              <span className="ml-2 text-xl font-bold">nepCscore</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname === link.path
                    ? 'bg-[#DC143C] text-white'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {user && (
              <div className="flex items-center ml-4">
                <Link 
                  to="/profile" 
                  className="text-gray-300 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center"
                >
                  <User size={18} className="mr-1" />
                  Profile
                </Link>
                <button 
                  onClick={logout}
                  className="text-gray-300 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center ml-2"
                >
                  <LogOut size={18} className="mr-1" />
                  Logout
                </button>
              </div>
            )}

            {!user && (
              <div className="flex items-center ml-4">
                <Link 
                  to="/login" 
                  className="text-gray-300 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Login
                </Link>
                <Link 
                  to="/signup" 
                  className="ml-2 bg-[#DC143C] text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-red-700"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0B0B0B]">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={`flex items-center px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === link.path
                    ? 'bg-[#DC143C] text-white'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                {link.icon}
                <span className="ml-2">{link.name}</span>
              </Link>
            ))}

            {user && (
              <>
                <Link 
                  to="/profile" 
                  onClick={closeMenu}
                  className="flex items-center text-gray-300 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                >
                  <User size={20} />
                  <span className="ml-2">Profile</span>
                </Link>
                <button 
                  onClick={() => {
                    logout();
                    closeMenu();
                  }}
                  className="w-full flex items-center text-gray-300 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                >
                  <LogOut size={20} />
                  <span className="ml-2">Logout</span>
                </button>
              </>
            )}

            {!user && (
              <div className="flex flex-col space-y-2 pt-2">
                <Link 
                  to="/login" 
                  onClick={closeMenu}
                  className="w-full text-center text-gray-300 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                >
                  Login
                </Link>
                <Link 
                  to="/signup" 
                  onClick={closeMenu}
                  className="w-full text-center bg-[#DC143C] text-white px-3 py-2 rounded-md text-base font-medium hover:bg-red-700"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;