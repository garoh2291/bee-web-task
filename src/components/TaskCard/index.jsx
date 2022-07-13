import { CaretRightOutlined, DeleteTwoTone } from "@ant-design/icons";
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
          <button onClick={() => deletehandler(_id)}>
            {" "}
            <DeleteTwoTone />
          </button>
          {status !== "done" ? (
            <button
              title="change status"
              onClick={() => changeTaskStatusHandler(_id, status)}
            >
              <CaretRightOutlined />{" "}
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </Card>
  );
};
