import React from 'react';

import { Link } from 'gatsby';

const Menubar = () => {
  return (
    <nav className="bg-gray-900 p-4 mt-0 w-full z-40">
      <div className="container mx-auto flex items-center">
        <div className="flex text-white font-extrabold">
          <Link to="/">
            <span className="sr-only">Home</span>
            <img
              className="h-8 w-auto sm:h-10"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            />
          </Link>
        </div>
        <div className="flex pl-4 text-sm">
          <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
            <li className="mr-2">
              <Link
                to="/"
                activeStyle={{ color: 'white' }}
                className="inline-block py-2 px-2 text-gray-600 no-underline hover:text-gray-200"
              >
                HOME
              </Link>
            </li>
            <li className="mr-2">
              <Link
                to="/about"
                activeStyle={{ color: 'white' }}
                className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-2"
              >
                About
              </Link>
            </li>
            <li className="mr-2">
              <Link
                to="/project"
                className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-2"
              >
                Projects
              </Link>
            </li>
            <li className="mr-2">
              <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-2">
                LINK
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menubar;
