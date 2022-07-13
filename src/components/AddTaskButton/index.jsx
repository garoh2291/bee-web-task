import React from "react";
import "./styles.css";

export const AddTaskButton = ({ changeNewTaskVisibility }) => {
  return (
    <div className="add_new_task_button_wrapper">
      <button onClick={changeNewTaskVisibility}>
        {" "}
        <span>+ New</span>
      </button>
    </div>
  );
};
