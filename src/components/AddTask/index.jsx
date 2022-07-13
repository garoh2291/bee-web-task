import React, { useMemo, useState } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { withHistory } from "slate-history";

export const EditableText = ({ addNewTaskHandler }) => {
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);
  const [value, setValue] = useState([
    {
      children: [
        {
          text: "",
        },
      ],
    },
  ]);

  return (
    <Slate editor={editor} value={value} onChange={setValue}>
      <Editable
        onBlur={() => addNewTaskHandler(value)}
        placeholder="Type a name..."
        style={{
          padding: "10px",
          border: "1px solid #999",
          borderRadius: "7px",
        }}
      />
    </Slate>
  );
};
