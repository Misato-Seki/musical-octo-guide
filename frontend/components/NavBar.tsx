'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', path: '/' },
    // { name: 'Skill', path: '/skill' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    // { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  // モバイルメニューが開いている時にスクロールを無効にする
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      {/* Desktop Side Navigation */}
      <nav className="hidden md:flex fixed left-0 top-0 h-full w-64 flex-col">
        <div className="p-6">
          <Link href="/" className="text-2xl font-bold block mb-10 text-gray-600 hover:text-black transition-colors">
            Misato Seki
          </Link>
          <div className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="group relative"
              >
                <span className={`font-medium inline-block transition-all duration-300 ${
                  pathname === item.path
                    ? 'text-black translate-x-2'
                    : 'text-gray-600 group-hover:text-black group-hover:translate-x-2'
                }`}>
                  {item.name}
                </span>
                <span className={`absolute -left-6 top-1/2 -translate-y-1/2 h-[1px] bg-black transition-all duration-300 ${
                  pathname === item.path
                    ? 'w-6 opacity-100'
                    : 'w-2 opacity-40 group-hover:w-4 group-hover:opacity-60'
                }`}></span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-[#171923]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="text-xl font-bold text-white/90 hover:text-white transition-colors">
                Portfolio
              </Link>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white/60 hover:text-white hover:bg-white/10 focus:outline-none transition-colors"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden transition-all duration-300 ease-in-out bg-[#171923]`}>
          <div className="px-2 pt-2 pb-3 space-y-4 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="group relative block px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                <span className={`font-medium inline-block transition-all duration-300 ${
                  pathname === item.path
                    ? 'text-white translate-x-2'
                    : 'text-white/60 group-hover:text-white/80 group-hover:translate-x-2'
                }`}>
                  {item.name}
                </span>
                <span className={`absolute left-0 top-1/2 -translate-y-1/2 h-[1px] bg-white transition-all duration-300 ${
                  pathname === item.path
                    ? 'w-6 opacity-100'
                    : 'w-2 opacity-40 group-hover:w-4 group-hover:opacity-60'
                }`}></span>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
