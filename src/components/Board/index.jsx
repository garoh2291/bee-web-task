import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { generateQuery } from "../../helpers/queryGenerator";
import { setTasksThunk } from "../../Redux/projectSlice/tasks-async";
import { BoardBody } from "../BoardBody";
import { BoardHeader } from "../BoardHeader";
import "./styles.css";

export const Board = () => {
  const [searchSortQuery, setSearchSortQuery] = useState([]);
  const dispatch = useDispatch();

  const getTasksClosure = useCallback(
    (filterEntries) => {
      const newArr = searchSortQuery.filter((item) => {
        return item.queryRoute === filterEntries.queryRoute;
      });
      if (newArr.length === 0) {
        setSearchSortQuery((prev) => {
          return [...prev, filterEntries];
        });
      } else {
        setSearchSortQuery((prev) => {
          return searchSortQuery.map((item) => {
            if (item.queryRoute === filterEntries.queryRoute) {
              return filterEntries;
            }
            return item;
          });
        });
      }
    },
    [searchSortQuery]
  );

  useEffect(() => {
    const query = generateQuery(searchSortQuery);
    dispatch(setTasksThunk(query));
  }, [searchSortQuery, dispatch]);

  return (
    <div className="task_board_wrapper">
      <BoardHeader getTasks={getTasksClosure} />
      <BoardBody />
    </div>
  );
};
