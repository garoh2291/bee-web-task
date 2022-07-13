import Search from "antd/lib/transfer/search";
import React from "react";

export const SearchInput = ({ handleSearch }) => {
  return (
    <Search
      placeholder="Type to search..."
      allowClear
      onChange={handleSearch}
      style={{
        width: 100,
      }}
    />
  );
};
