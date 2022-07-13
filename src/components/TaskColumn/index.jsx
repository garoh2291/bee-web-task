import { Col, Space, Typography } from "antd";
import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteTaskThunk,
  changeStatusThunk,
  addTaskThunk,
} from "../../Redux/projectSlice/tasks-async";
import { EditableText } from "../AddTask";
import { AddTaskButton } from "../AddTaskButton";
import { TaskCard } from "../TaskCard";
import "./styles.css";

export const TaskColumn = ({ title, taskList }) => {
  const dispatch = useDispatch();
  const [isNewTaskVisible, setIsTaskVisible] = useState(false);
  const changeNewTaskVisibility = () => {
    setIsTaskVisible((prev) => !prev);
  };

  const deletehandler = useCallback(
    (_id) => {
      dispatch(deleteTaskThunk(_id));
    },
    [dispatch]
  );

  const changeTaskStatusHandler = useCallback(
    (_id, status) => {
      const value = status === "to do" ? "doing" : "done";
      dispatch(changeStatusThunk({ _id, value }));
    },
    [dispatch]
  );

  const addNewTaskHandler = useCallback(
    (value, status = title, onCb = changeNewTaskVisibility) => {
      const title = value[0].children[0].text;
      const newTask = {
        title,
        status,
      };
      if (title) {
        dispatch(addTaskThunk({ newTask, onCb }));
      } else {
        onCb();
      }
    },
    [dispatch, title]
  );

  const { Text, Paragraph } = Typography;
  return (
    <Col xs={24} sm={24} md={8} lg={8} xl={8}>
      <div className="task_column">
        <Space
          direction="vertical"
          size="middle"
          style={{
            display: "flex",
          }}
        >
          <Paragraph>
            {" "}
            <Text className={`task_column_header_text ${title}`}>{title}</Text>
            <Text style={{ marginLeft: "10px", color: "#8c8c8c" }}>
              {taskList.length}
            </Text>
          </Paragraph>
          <AddTaskButton changeNewTaskVisibility={changeNewTaskVisibility} />
          {isNewTaskVisible && (
            <EditableText addNewTaskHandler={addNewTaskHandler} />
          )}
          {taskList.length ? (
            taskList.map((task) => {
              return (
                <TaskCard
                  key={task._id}
                  task={task}
                  deletehandler={deletehandler}
                  changeTaskStatusHandler={changeTaskStatusHandler}
                />
              );
            })
          ) : (
            <p className="no_task">No Task</p>
          )}
        </Space>
      </div>
    </Col>
  );
};
