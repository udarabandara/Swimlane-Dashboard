import React from 'react'

function TitleContent() {
  return (
    <div className="w-full py-4 flex-col border-b border-gray-300">
      <div className="flex px-8 flex-row mb-2">
        <span className="text-xl font-bold">Sport Xi Project</span>
         <button className="px-2 bg-amber-500 rounded-md ml-5">
                <span className="text-sm">In progress</span>
          </button>
      </div>
      <span className="text-m px-8 text-gray-400 px-8 ">event production</span>

      <div className="flex flex-row items-center mt-2 mb-4 px-8 ">
      <span className="text-m text-gray-400">assigned</span>

      <div className="flex -space-x-3 ml-5">
        <img className="dark:invert w-8 h-8 rounded-full border-2 border-white" src="/user.svg" alt="user"  />
        <img className="dark:invert w-8 h-8 rounded-full border-2 border-white" src="/user.svg" alt="user"  />
        <img className="dark:invert w-8 h-8 rounded-full border-2 border-white" src="/user.svg" alt="user"  />
        <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-700 text-sm font-semibold flex items-center justify-center border-2 border-white">
          +2
        </div>
      </div>

       <button className="px-4 py-1 flex flex-row items-center border border-gray-300 rounded-2xl ml-5">
            <span className="text-sm text-gray-400 mr-2">Manage</span>
            <svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="18"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline text-gray-400 icon-tabler-pencil"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" /><path d="M13.5 6.5l4 4" /></svg>
          </button>
      </div>

      <div className="w-full flex-col pt-4 border-t border-gray-300">
         <span className="text-m text-gray-400 ml-8">Last updated on: 08 August, 2025</span>
      </div>
    </div>
  )
}

export default TitleContent
