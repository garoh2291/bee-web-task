import {
  CaretRightOutlined,
  CheckOutlined,
  DeleteTwoTone,
} from "@ant-design/icons";
import { Card, Typography } from "antd";

import "./styles.css";

export const TaskCard = ({ task, deletehandler, changeTaskStatusHandler }) => {
  const { _id, title, status } = task;

  const { Text } = Typography;
  return (
    <Card size="small" className="task_card_main_body">
      <div className="card_body">
        {" "}
        <Text style={{ width: "70%", marginLeft: "10px" }}>{title}</Text>
        <div>
          {status !== "done" ? (
            <button
              title={status === "to do" ? "Start Doing" : "Make Done"}
              onClick={() => changeTaskStatusHandler(_id, status)}
            >
              {status === "doing" ? <CheckOutlined /> : <CaretRightOutlined />}{" "}
            </button>
          ) : (
            ""
          )}
          <button onClick={() => deletehandler(_id)}>
            {" "}
            <DeleteTwoTone />
          </button>
        </div>
      </div>
    </Card>
  );
};
