import React from "react";
import { Link } from "react-router-dom";
import { RegistrationForm } from "../RegistrationForm";
import "./styles.css";

export const Registration = () => {
  return (
    <div className="registration_section">
      <RegistrationForm />
      <div className="move_to_login">
        <span>
          Have an account?<Link to={"/login"}>Log in</Link>{" "}
        </span>
      </div>
    </div>
  );
};
