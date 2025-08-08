"use client";

import React from "react";
import { useState } from "react";

export default function Nav() {
  const [showBoards, setShowBoards] = useState(false);

  const navLinkClass =
    "flex items-center gap-2 p-2 rounded-md hover:text-gray-300 focus:border focus:border-gray-300";

  const stickyBottomNav = {
    position: "fixed",
    left: 10,
    bottom: 8,
    width: "200px",
  };
  return (
    <div>
      <div className="flex flex-row px-6 py-2 rounded-md border border-gray-300 w-auto">
        <img
          className="dark:invert"
          src="/user.svg"
          alt="user"
          width={30}
          height={30}
        />

        <div className="flex flex-col pl-4">
          <span className="text-sm text-gray-400">workspace</span>
          <span className="text-m font-bold">Root Folder</span>
        </div>
      </div>
      <nav className="space-y-4 mt-4">
        <a href="#" className={navLinkClass}>
          <img
            className="dark:invert"
            src="/layout-dashboard.svg"
            alt="layout-dashboard"
            width={20}
            height={20}
          />
          <span>Dashboard</span>
        </a>
        <div>
          <div onClick={() => setShowBoards(!showBoards)}>
            {" "}
            <a href="#" className={navLinkClass}>
              <img
                className="dark:invert"
                src="/file.svg"
                alt="boards"
                width={20}
                height={20}
              />
              <span>Boards</span>
            </a>
          </div>

          {showBoards && (
            <div className="ml-8 mt-2 space-y-2">
              <a href="#" className="block text-sm hover:text-gray-300">
                {"> Create routes"}
              </a>
              <a href="#" className="block text-sm hover:text-gray-300">
                {"> Delepment React App"}
              </a>
              <a href="#" className="block text-sm hover:text-gray-300">
                {"> Sport Xi Project"}
              </a>
              <a href="#" className="block text-sm hover:text-gray-300">
                {"> Wordpress theme"}
              </a>
            </div>
          )}
        </div>
        <a href="#" className={navLinkClass}>
          <img
            className="dark:invert"
            src="/brand-line.svg"
            alt="layout-dashboard"
            width={20}
            height={20}
          />
          <span>Messages</span>
        </a>
        <a href="#" className={navLinkClass}>
          <img
            className="dark:invert"
            src="/calendar-week.svg"
            alt="layout-dashboard"
            width={20}
            height={20}
          />
          <span>Calendar</span>
        </a>
        <a href="#" className={navLinkClass}>
          <img
            className="dark:invert"
            src="/user 2.svg"
            alt="layout-dashboard"
            width={20}
            height={20}
          />
          <span>Team Members</span>
        </a>
      </nav>

      <div style={stickyBottomNav} className="flex flex-col gap-2 w-auto">
        <button className="flex items-center gap-2 p-2 ">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18.364 5.636a9 9 0 11-12.728 0M12 12v.01M12 16h.01"
            ></path>
          </svg>
          <span>Support</span>
        </button>
        <button className="flex items-center gap-2 p-2 rounded-md text-white bg-gray-900 hover:bg-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 16l4-4m0 0l-4-4m4 4H7"
            />
          </svg>
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}
