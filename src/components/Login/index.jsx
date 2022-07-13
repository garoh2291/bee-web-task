import React from "react";
import { Link } from "react-router-dom";
import { LoginForm } from "../LoginForm";
import "./styles.css";

export const Login = () => {
  return (
    <div className="login_section">
      <LoginForm />
      <div className="move_to_registration">
        <span>
          Don't have an account? <Link to={"/registration"}>Sign up</Link>{" "}
        </span>
      </div>
    </div>
  );
};
