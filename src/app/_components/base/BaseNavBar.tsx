import { History, HelpCircle, Bell, User, MenuIcon } from 'lucide-react';
import Link from 'next/link';
import React from "react";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Data', href: '/data' },
  { label: 'Automations', href: '/automations' },
  { label: 'Interfaces', href: '/interfaces' },
  { label: 'Forms', href: '/forms' },
];

export const BaseNavBar = () => {
  const totalRows = 1000;

  return (
    <div>
      <nav className="flex h-14 items-center justify-between bg-teal-600 px-4">
      {/* Left section */}
      <div className="flex items-center space-x-4">
        {/* Logo/Home link */}
        <Link href="/" className="flex items-center">
          <div className="text-white text-xl font-semibold">Base 1</div>
        </Link>

        {/* Navigation items */}
        <div className="flex items-center space-x-2">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="px-3 py-2 text-white hover:bg-teal-700 rounded-md transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Right section */}
      <div className="flex items-center space-x-4">
        {/* History button */}
        <button
          className="p-2 text-white hover:bg-teal-700 rounded-full transition-colors"
          aria-label="History"
        >
          <History className="h-5 w-5" />
        </button>

        {/* Help button */}
        <button
          className="p-2 text-white hover:bg-teal-700 rounded-full transition-colors"
          aria-label="Help"
        >
          <HelpCircle className="h-5 w-5" />
        </button>

        {/* Notifications button */}
        <button
          className="p-2 text-white hover:bg-teal-700 rounded-full transition-colors"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5" />
        </button>

        {/* Profile button */}
        <button
          className="p-2 text-white hover:bg-teal-700 rounded-full transition-colors"
          aria-label="Profile"
        >
          <User className="h-5 w-5" />
        </button>
      </div>
    </nav>
    
      <div className="my-5 flex items-center space-x-4 px-4">
        <MenuIcon className="h-5 w-5" />
        <div>
          <h1 className="text-sm">Total rows: {totalRows}</h1>
        </div>
      </div>
    </div>
  );
};
