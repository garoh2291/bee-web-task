import { UserOutlined } from "@ant-design/icons";
import { Dropdown, Menu } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LogOutThunk } from "../../Redux/userSlice/user-async";
import "./styles.css";

export const LogOut = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cb = () => navigate("/login", { replace: true });

  const handleMenuClick = (e) => {
    dispatch(LogOutThunk(cb));
  };

  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          label: "Logout",
          key: "1",
        },
      ]}
    />
  );

  return (
    <div className="log_out_section">
      <Dropdown.Button
        overlay={menu}
        // trigger={menu}
        placement="bottom"
        icon={<UserOutlined />}
      ></Dropdown.Button>
    </div>
  );
};
