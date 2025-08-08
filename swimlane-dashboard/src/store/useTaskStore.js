import { create } from 'zustand';

export const useTaskStore = create((set) => ({
  tasks: [],
  searchQuery: '',
  setTasks: (tasks) => set({ tasks }),
  updateTaskStatus: (taskId, newStatus) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      ),
    })),
  setSearchQuery: (query) => set({ searchQuery: query }),
}));


