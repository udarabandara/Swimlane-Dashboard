"use client";

import React from 'react';
import { useTaskStore } from '../store/useTaskStore';

function Header() {

  const searchQuery = useTaskStore((state) => state.searchQuery);
  const setSearchQuery = useTaskStore((state) => state.setSearchQuery);

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <header className="h-20 w-full flex items-center justify-between px-6 border-b border-gray-300 bg-white">
        <div className="flex w-full pa-2 items-center justify-between">
          <div className="text-gray-900 font-semibold font-Serif text-2xl">
            <img
              className="img-fluid logo logo-display w-30 h-10"
              src="/images/board_app_img.png"
              alt="logo"
            />
          </div>

          <div className="flex flex-row">
            <div className="flex flex-row items-center gap-4 mr-5">
            <button className="px-6 py-2 bg-blue-500 text-white hover:bg-blue-300 transition rounded-md md:w-85 sm:w-auto">
                <span className="md:hidden text-xl">+</span>
                <span className="hidden md:inline">Create New Board +</span>
                </button>

            <input
              type="text"
              value={searchQuery}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="search"
            />
          </div>

          <div className="flex flex-row items-center gap-1">
            <img
              className="dark:invert"
              src="/adjustments-horizontal.svg"
              alt="adjustments-horizontal"
              width={20}
              height={20}
            />

            <img
              className="dark:invert"
              src="/bell.svg"
              alt="notification"
              width={20}
              height={20}
            />

            <img
              className="dark:invert"
              src="/user.svg"
              alt="user"
              width={20}
              height={20}
            />
          </div>
          </div>
          
        </div>
      </header>
    </div>
  );
}

export default Header;
