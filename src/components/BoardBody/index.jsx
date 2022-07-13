import { Row, Spin } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { TaskColumn } from "../TaskColumn";
import "./styles.css";

export const BoardBody = () => {
  const { tasks } = useSelector((state) => state.project);

  if (!tasks) {
    return (
      <div className="loading_data">
        <Spin />
      </div>
    );
  }

  const todoTasks = tasks.filter((task) => task.status === "to do");
  const doingTasks = tasks.filter((task) => task.status === "doing");
  const doneTasks = tasks.filter((task) => task.status === "done");

  if (!todoTasks || !doingTasks || !doneTasks) {
    return (
      <div className="loading_data">
        <Spin />
      </div>
    );
  }

  return (
    <div className="board_body">
      <Row>
        <TaskColumn title={"to do"} taskList={todoTasks} />
        <TaskColumn title={"doing"} taskList={doingTasks} />
        <TaskColumn title={"done"} taskList={doneTasks} />
      </Row>
    </div>
  );
};
