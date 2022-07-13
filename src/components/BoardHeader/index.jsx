import { Space } from "antd";
import { getWindowDimensions } from "../../helpers/windowSizes";
import { SearchInput } from "../SearchInput";
import { SortInput } from "../SortInput";
import "./styles.css";

export const BoardHeader = ({ getTasks }) => {
  const { width } = getWindowDimensions();
  const handleSearch = (event) => {
    const value = event.target.value;
    getTasks({
      queryRoute: "search",
      queryValue: value,
    });
  };

  const handleSort = (event) => {
    getTasks({
      queryRoute: "sort",
      queryValue: event,
    });
  };
  return (
    <div className="board_header">
      <div className="header_action_section">
        <Space
          size={10}
          direction={width >= 500 ? "horizontal" : "vertical"}
          align={width >= 500 ? "end" : "start"}
        >
          {" "}
          <SearchInput handleSearch={handleSearch} />
          <SortInput handleSort={handleSort} />
        </Space>
      </div>
    </div>
  );
};
