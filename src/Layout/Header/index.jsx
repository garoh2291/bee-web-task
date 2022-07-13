import { PageHeader } from "antd";
import React from "react";
import "./styles.css";

export const HeaderLayout = () => {
  return (
    <div className="header_layout">
      <PageHeader title={"Notion"} subTitle="Make Your own todo list" />
    </div>
  );
};
