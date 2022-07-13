import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export const NotFoundPage = () => {
  return (
    <section>
      <div className="site">
        <div className="sketch">
          <div className="bee-sketch red"></div>
          <div className="bee-sketch blue"></div>
        </div>

        <h1>
          404:
          <small>Players Not Found</small>
        </h1>
      </div>
      <Button type="primary" className="to_main_page">
        <Link to={"/"}> Go Home</Link>
      </Button>
    </section>
  );
};
