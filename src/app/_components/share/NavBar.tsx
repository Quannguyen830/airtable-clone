import React from 'react';
import Link from 'next/link';
import { Menu, Search, HelpCircle, Bell, User } from 'lucide-react';
import { PrimaryLogo } from '../icons/PrimaryLogo';

export const NavBar = () => {
  return (
    <nav className="flex h-20 items-center justify-between border-b border-gray-200 bg-white px-3">
      {/* Left section */}
      <div className="flex items-center space-x-3">
        <button
          className="p-1.5 text-gray-600 hover:bg-gray-100 rounded transition-colors"
          aria-label="Menu"
        >
          <Menu className="h-5 w-5" />
        </button>

        {/* Logo/Home link */}
        <Link href="/" className="flex items-center">
          <div className="flex items-center space-x-2">
            <PrimaryLogo /> 
          </div>
        </Link>
      </div>

      {/* Center section - Search */}
      <div className="flex-1 max-w-2xl px-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-1.5 text-sm bg-gray-100 border border-transparent rounded-lg 
                     focus:bg-white focus:border-gray-300 focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* Right section */}
      <div className="flex items-center space-x-2">
        <button
          className="p-1.5 text-gray-600 hover:bg-gray-100 rounded transition-colors"
          aria-label="Help"
        >
          <HelpCircle className="h-5 w-5" />
        </button>

        <button
          className="p-1.5 text-gray-600 hover:bg-gray-100 rounded transition-colors"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5" />
        </button>

        <button
          className="p-1.5 text-gray-600 hover:bg-gray-100 rounded transition-colors"
          aria-label="Profile"
        >
          <User className="h-5 w-5" />
        </button>
      </div>
    </nav>
  );
};
