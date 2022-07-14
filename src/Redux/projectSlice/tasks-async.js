import { getTasksRequest } from "../../api";
import { BACKEND_URL } from "../../data";
import { getToken } from "../../helpers/token";
import { removeUser } from "../userSlice";
import { successMessage } from "../../helpers/notification";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { addTask, changedTaskDetails, deleteTask, setTasks } from ".";

export const setTasksThunk = createAsyncThunk(
  "project/setTasksThunk",
  function (query, { dispatch, rejectWithValue }) {
    getTasksRequest(query)
      .then((data) => {
        if (data.error || data.errors) {
          if (data.error.status === 401) {
            dispatch(removeUser);
          }
          throw new Error(data.errors[0].message);
        }
        dispatch(setTasks({ data }));
      })
      .catch((err) => {
        rejectWithValue(err);
      });
  }
);

export const addTaskThunk = createAsyncThunk(
  "tasks/addTasksThunk",
  function ({ newTask, onCb }, { dispatch, rejectWithValue }) {
    fetch(`${BACKEND_URL}/task`, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${getToken()}`,
      },
      method: "POST",
      body: JSON.stringify(newTask),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          throw data.error;
        }
        successMessage("Success");
        dispatch(addTask({ data }));
      })
      .catch((error) => {
        return rejectWithValue(error.message);
      });
    onCb();
  }
);

export const deleteTaskThunk = createAsyncThunk(
  "tasks/deleteTaskThunk",
  function (_id, { dispatch, rejectWithValue }) {
    fetch(`${BACKEND_URL}/task/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",

        authorization: `Bearer ${getToken()}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Cant delete");
        }
        successMessage("Success");

        dispatch(deleteTask({ _id }));
      })
      .catch((error) => {
        return rejectWithValue(error.message);
      });
  }
);

export const changeStatusThunk = createAsyncThunk(
  "project/changeStatusThink",
  function ({ _id, value }, { dispatch }) {
    fetch(`${BACKEND_URL}/task/${_id}`, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${getToken()}`,
      },
      method: "PUT",
      body: JSON.stringify({
        status: value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          throw new Error(data.error);
        }
        successMessage("Success");

        dispatch(changedTaskDetails({ data }));
      })
      .catch((err) => console.log(err));
  }
);
