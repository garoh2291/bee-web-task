import { Select, Typography } from "antd";
import React from "react";
import { SORT_FIELDS } from "../../data";

export const SortInput = ({ handleSort }) => {
  const { Text } = Typography;
  return (
    <>
      <Text style={{ marginRight: "5px" }}>Sort By</Text>
      <Select
        placeholder="Sort By"
        defaultValue=""
        style={{
          width: 150,
        }}
        onChange={handleSort}
      >
        {SORT_FIELDS.map((option, index) => {
          return (
            <Select.Option key={index} value={option.value}>
              {option.label}
            </Select.Option>
          );
        })}
      </Select>
    </>
  );
};
