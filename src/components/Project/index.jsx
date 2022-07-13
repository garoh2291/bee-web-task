import { Row } from "antd";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserDetailsThunk } from "../../Redux/userSlice/user-async";
import { Board } from "../Board";
import { ProjectHeader } from "../ProjectHeader";

export const Project = () => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const cb = useCallback(
    () => navigate("/login", { replace: true }),
    [navigate]
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserDetailsThunk(cb));
  }, [dispatch, cb]);

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
