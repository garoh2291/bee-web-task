import { Col, Space, Typography } from "antd";
import { LogOut } from "../UserLogout";
import React from "react";

export const ProjectHeader = () => {
  const { Title, Text } = Typography;
  return (
    <Col
      span={24}
      style={{ minHeight: "100px", marginTop: "50px", marginBottom: "10px" }}
    >
      <Title level={2}>Task List</Title>
      <Col md={{ span: 16 }} sm={{ span: 24 }}>
        <Space size={0} direction="vertical">
          <Text>Use this template to track your personal tasks.</Text>
          <Text>
            Click{" "}
            <Text code type="warning">
              + New
            </Text>{" "}
            to create a new task directly on this board.
          </Text>
          <Text>
            Click an existing task to add additional context or subtasks.
          </Text>
        </Space>
      </Col>
      <LogOut />
    </Col>
  );
};
