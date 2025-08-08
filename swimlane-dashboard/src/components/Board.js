"use client";

import React, { useState, useEffect } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useTaskStore } from "../store/useTaskStore";

const ItemTypes = {
  TASK: "task",
};

const statuses = [
  { name: "To Do", key: "todo", class: "bg-gray-200" },
  { name: "In Progress", key: "inprogress", class: "bg-amber-500 " },
  { name: "Approved", key: "approved", class: "bg-lime-500" },
  { name: "Rejected", key: "rejected", class: "bg-red-600 text-white" },
];

function Task({ task }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.TASK,
    item: { id: task.id, status: task.status },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const categoryColors = {
  'Feedback': 'bg-blue-500',
  'Interface': 'bg-gray-900',
  'UX Research': 'bg-orange-500',
  'Presentation': 'bg-green-500',
  'Research': 'bg-lime-300',
  'Design': 'bg-red-500',
};

const colorClass = categoryColors[task.category] || 'bg-gray-400';

  return (
    <div
      ref={drag}
      className={`flex flex-col p-3 mb-2 bg-white rounded shadow cursor-move ${
        isDragging ? "opacity-50" : "opacity-100"
      }`}
    >
       <span className="text-sm text-gray-300 flex items-center">
    <span
      className={`inline-block w-2 h-2 rounded-xs mr-2 ${colorClass}`}
      aria-hidden="true"
    ></span>
    {task.category}
  </span>
      {task.title}

      <div className="flex flex-row">
        {task.noOfAssignees < 4 ? (
          <div className="flex -space-x-2">
            {Array.from({ length: task.noOfAssignees }).map((_, index) => (
              <img
                key={index}
                className="dark:invert w-6 h-6 rounded-full border-2 border-white"
                src="/user.svg"
                alt="user"
              />
            ))}
          </div>
        ) : (
          <div className="flex -space-x-2">
            {Array.from({ length: 3 }).map((_, index) => (
              <img
                key={index}
                className="dark:invert w-6 h-6 rounded-full border-2 border-white"
                src="/user.svg"
                alt="user"
              />
            ))}

            <div className="w-6 h-6 rounded-full bg-gray-200 text-gray-700 text-xs font-semibold flex items-center justify-center border-2 border-white">
              +{task.noOfAssignees - 3}
            </div>
          </div>
        )}


      <button className="bg-gray-50 px-1 text-gray-400 rounded-sm w-auto ml-2">
          <span className="text-xs">⚡</span>
          <span className="text-xs text-gray-400">{task.priority}</span>
      </button>
      </div>

      { task.img &&  <img src={task.img }  width={150} height={12}/>}

      <hr className="border-t border-gray-200 mt-4 mb-4" />
      <div className="flex flex-row justify-between">

         <div className="flex flex-row">
            <img
            className="text-gray-400"
            src="/link.svg"
            alt="layout-dashboard"
            width={12}
            height={12}
          />
          <span className="text-xs text-gray-400 ml-2">{task.noOfEngagers}</span>
        </div>

        <div className="flex flex-row">
            <img
            className="text-gray-400"
            src="/brand-line.svg"
            alt="layout-dashboard"
            width={12}
            height={12}
          />
          <span className="text-xs text-gray-400 ml-2">{task.noOfComments}</span>
        </div>

        <div className="flex flex-row">
            <img
            className="text-gray-400"
            src="/calendar-week.svg"
            alt="layout-dashboard"
            width={12}
            height={12}
          />
          <span className="text-xs text-gray-400 ml-2">
  Due: {new Date(task.dueDate).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })}
</span>
        </div>
      </div>
    </div>
  );
}

function Column({ status, tasks, onDropTask }) {
  const [, drop] = useDrop(() => ({
    accept: ItemTypes.TASK,
    drop: (item) => {
      if (item.status !== status.key) {
        onDropTask(item.id, status.key);
      }
    },
  }));

  return (
    <div
      ref={drop}
      className="w-full md:w-1/4 border-l border-gray-300 flex flex-col"
      style={{ minHeight: "400px" }}
    >
      <div className="w-full flex justify-between items-center px-2 h-16 bg-white border-b border-gray-300">
        <button
          className={` h-8 px-5 items-center rounded-2xl ${status.class}`}
        >
          {status.name}
        </button>

        <div className="flex flex-row gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-plus"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 5l0 14" />
            <path d="M5 12l14 0" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-dots"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          </svg>
        </div>
      </div>
      <div className="p-2 flex-grow overflow-auto">
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default function Board() {
  const tasks = useTaskStore((state) => state.tasks);
  const setTasks = useTaskStore((state) => state.setTasks);
  const updateTaskStatus = useTaskStore((state) => state.updateTaskStatus);
  const searchQuery = useTaskStore((state) => state.searchQuery);

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    fetch("/tasks.json")
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
      });
  }, [setTasks]);

  const handleDropTask = (taskId, newStatus) => {
    updateTaskStatus(taskId, newStatus);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex w-full min-h-100 bg-zinc-100 flex-col md:flex-row">
        {statuses.map((status) => (
          <Column
            key={status.key}
            status={status}
            tasks={filteredTasks.filter((task) => task.status === status.key)}
            onDropTask={handleDropTask}
          />
        ))}
      </div>
    </DndProvider>
  );
}
