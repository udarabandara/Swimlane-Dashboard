"use client";

import Header from "../components/Header";
import Nav from "../components/Nav";
import TitleContent from "../components/TitleContent";
import Board from "../components/Board";

import { useState } from "react";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      {/* Header */}
      <div className={`${sidebarOpen ? "hidden" : "hidblockden"}`}>
        {" "}
        <Header />
      </div>

      <div className="w-full flex flex-row min-h-screen">
        {/* Sidebar */}
        <div
          className={`${
            sidebarOpen ? "block" : "hidden"
          } fixed z-30 inset-y-0 bg-white left-0 w-64 border-r border-gray-300 p-4 md:relative md:block`}
        >
          <div className="flex justify-between items-center mb-4 md:hidden">
            <button onClick={() => setSidebarOpen(false)}>✕</button>
          </div>
          <Nav />
        </div>

        {/* Main Content Area */}
        <div className="w-full">
          {/* Topbar for small screens */}
          <div className="md:hidden bg-white shadow p-4 flex justify-between items-center">
            <button onClick={() => setSidebarOpen(true)}>☰</button>
          </div>

          <main className="flex flex-col bg-white w-full">
            <TitleContent />
            <Board />
          </main>
        </div>
      </div>
    </div>
  );
}
