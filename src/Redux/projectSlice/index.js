import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
  name: "project",
  initialState: {
    tasks: null,
    error: null,
    status: null,
  },
  reducers: {
    setTasks(state, action) {
      const taskFromBackend = action.payload.data;
      return {
        ...state,
        tasks: taskFromBackend,
      };
    },
    addTask(state, action) {
      const newTask = action.payload.data;
      const tasks = [...state.tasks, newTask];
      return {
        ...state,
        tasks,
      };
    },
    deleteTask(state, action) {
      const deletedTaskId = action.payload._id;
      const tasks = state.tasks.filter((task) => task._id !== deletedTaskId);
      return {
        ...state,
        tasks,
      };
    },
    changedTaskDetails(state, action) {
      const changedStatusTask = action.payload.data;
      const tasks = state.tasks.map((task) => {
        if (task._id === changedStatusTask._id) {
          return changedStatusTask;
        }
        return task;
      });
      return {
        ...state,
        tasks,
      };
    },
  },
});

export const { setTasks, addTask, deleteTask, changedTaskDetails } =
  projectSlice.actions;

export default projectSlice.reducer;
