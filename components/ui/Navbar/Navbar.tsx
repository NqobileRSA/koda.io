'use client';
import React, { useState } from 'react';
import { Menu, X, Home, Info, Briefcase, Mail } from 'lucide-react';

type Props = {};

const Navbar = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePage, setActivePage] = useState('Home');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: 'Home', href: '#', icon: Home },
    { name: 'About', href: '#', icon: Info },
    { name: 'Projects', href: '#', icon: Briefcase },
    { name: 'Contact', href: '#', icon: Mail },
  ];

  const handlePageClick = (pageName: string) => {
    setActivePage(pageName);
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop and Tablet Navigation */}
      <nav className="hidden md:flex items-center justify-between flex-wrap p-6 bg-white shadow-md">
        <div className="flex items-center flex-shrink-0 text-gray-500 mr-6">
          <svg
            className="fill-current h-8 w-8 mr-2"
            width={54}
            height={54}
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <span className="font-semibold text-xl tracking-tight">Koda.io</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`block mt-4 lg:inline-block lg:mt-0 mr-4 px-3 py-2 ${
                activePage === item.name
                  ? 'text-black border-b-2 border-gray-500'
                  : 'text-gray-500 hover:text-black'
              }`}
              onClick={() => handlePageClick(item.name)}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Tablet Dropdown */}
        <div className="lg:hidden relative">
          <button
            onClick={toggleMenu}
            className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-500 hover:text-black hover:border-black"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-2 text-sm ${
                    activePage === item.name
                      ? 'text-black border-l-4 border-gray-500'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => handlePageClick(item.name)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Bottom Tab Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-md">
        <div className="flex justify-around">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center py-2 px-3 ${
                activePage === item.name
                  ? 'bg-gray-500 text-white rounded-md'
                  : 'text-gray-500'
              }`}
              onClick={() => handlePageClick(item.name)}
            >
              <item.icon
                className={`h-6 w-6 ${
                  activePage === item.name ? 'text-white' : 'text-gray-500'
                }`}
              />
              <span className="mt-1 text-xs">{item.name}</span>
            </a>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
