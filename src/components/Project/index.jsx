import { Row } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetailsThunk } from "../../Redux/userSlice/user-async";
import { Board } from "../Board";
import { ProjectHeader } from "../ProjectHeader";

export const Project = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserDetailsThunk());
  }, [dispatch]);

  if (!user) {
    return <h1>Loading</h1>;
  }
  return (
    <>
      <Row>
        <ProjectHeader />
        <Board />
      </Row>
    </>
  );
};
