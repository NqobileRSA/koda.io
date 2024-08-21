'use client';
import React, { useState } from 'react';
import {
  IoHomeOutline,
  IoInformationCircleOutline,
  IoFolderOutline,
  IoMailOutline,
  IoFileTrayFullOutline,
  IoFileTrayFullSharp,
  IoHome,
  IoInformationCircle,
  IoFolderOpenSharp,
  IoMailSharp,
  IoPersonOutline,
  IoPerson,
  IoLogoGithub,
  IoLogoTwitter,
  IoLogoInstagram,
  IoMenuSharp,
  IoCloseSharp,
} from 'react-icons/io5';
import Image from 'next/image';

type Props = {};

const Navbar = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePage, setActivePage] = useState('Home');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: 'Home', href: '#', icon: IoHomeOutline, activeIcon: IoHome },
    {
      name: 'About',
      href: '#',
      icon: IoInformationCircleOutline,
      activeIcon: IoInformationCircle,
    },
    {
      name: 'Projects',
      href: '#',
      icon: IoFolderOutline,
      activeIcon: IoFolderOpenSharp,
    },
    {
      name: 'Archives',
      href: '#',
      icon: IoFileTrayFullOutline,
      activeIcon: IoFileTrayFullSharp,
    },
    {
      name: 'Contact',
      href: '#',
      icon: IoPersonOutline,
      activeIcon: IoPerson,
    },
  ];

  const socialItems = [
    { name: 'Github', href: '#', icon: IoLogoGithub },
    { name: 'Twitter', href: '#', icon: IoLogoTwitter },
    { name: 'Instagram', href: '#', icon: IoLogoInstagram },
  ];

  const handlePageClick = (pageName: string) => {
    setActivePage(pageName);
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="z-50 w-full hidden lg:flex items-center justify-between flex-wrap px-[50px] py-[10px] bg-white shadow-md">
        <div className="flex items-center">
          <div className="flex items-center flex-shrink-0 text-gray-500 mr-6">
            <Image
              src={'/blackIcon.png'}
              height={25}
              width={25}
              alt="Koda.io icon"
              className="mr-4 grayscale-100"
            />
            <span className="font-semibold text-xl tracking-tight">
              Koda.io
            </span>
          </div>
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
        <div className="flex items-center">
          {socialItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-500 hover:text-black ml-4"
            >
              <item.icon size={20} />
            </a>
          ))}
        </div>
      </nav>

      {/* Tablet Navigation */}
      <nav className="z-50 w-full hidden sm:flex md:flex lg:hidden items-center justify-between flex-wrap px-[50px] py-[10px] bg-white shadow-md">
        <div className="flex items-center flex-shrink-0 text-gray-500 mr-6">
          <Image
            src={'/blackIcon.png'}
            height={25}
            width={25}
            alt="Koda.io icon"
            className="mr-4 grayscale-100"
          />
          <span className="font-semibold text-xl tracking-tight">Koda.io</span>
        </div>

        <div className="relative flex items-center">
          <div className="flex">
            {socialItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-500 hover:text-black ml-4"
              >
                <item.icon size={20} />
              </a>
            ))}
          </div>
          <button
            onClick={toggleMenu}
            className="flex items-center px-3 py-2 rounded text-gray-500 border-gray-500 hover:text-black hover:border-black"
          >
            {isOpen ? <IoCloseSharp size={24} /> : <IoMenuSharp size={24} />}
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
              <div className="border-t border-gray-200 mt-2 pt-2">
                {socialItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <item.icon size={16} className="mr-2" />
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="z-50 md:hidden fixed top-0 left-0 right-0 bg-white shadow-md">
        <div className="flex justify-between items-center px-4 py-2">
          <div className="flex items-center">
            <Image
              src={'/blackIcon.png'}
              height={25}
              width={25}
              alt="Koda.io icon"
              className="grayscale-100 mr-2"
            />
            <span className="font-semibold text-xl tracking-tight text-gray-500">
              Koda.io
            </span>
          </div>
          <div className="flex items-center">
            <div className="flex">
              {socialItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-500 hover:text-black ml-4"
                >
                  <item.icon size={20} />
                </a>
              ))}
            </div>
            <button
              onClick={toggleMenu}
              className="flex items-center px-3 py-2 rounded text-gray-500 border-gray-500 hover:text-black hover:border-black"
            >
              {isOpen ? <IoCloseSharp size={24} /> : <IoMenuSharp size={24} />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="bg-white shadow-md py-2">
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
      </nav>

      {/* Mobile Bottom Tab Navigation */}
      <nav className="z-50 md:hidden border-t-[1px] border-gray-600 fixed bottom-0 left-0 right-0 bg-white shadow-md">
        <div className="flex justify-around pb-2">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center py-2 px-3 ${
                activePage === item.name
                  ? 'text-black border-b-2 border-gray-500'
                  : 'text-gray-500'
              }`}
              onClick={() => handlePageClick(item.name)}
            >
              {activePage === item.name ? (
                <item.activeIcon size={24} className="text-black" />
              ) : (
                <item.icon size={24} className="text-gray-500" />
              )}
              {/* <span className="mt-1 text-sm">{item.name}</span> */}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
