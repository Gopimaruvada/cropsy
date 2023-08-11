// src/SelectedValueBox.tsx
import React from "react";

interface SelectedValueBoxProps {
  selectedValues: string[];
  onRemove: (value: string) => void;
}

const SelectedValueBox: React.FC<SelectedValueBoxProps> = ({
  selectedValues,
  onRemove,
}) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "10px",
        margin: "10px",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {selectedValues?.map((value) => (
        <div
          key={value}
          style={{
            display: "flex",
            alignItems: "center",
            marginRight: "10px",
            marginBottom: "5px",
          }}
        >
          <span>{value}</span>
          <button onClick={() => onRemove(value)} style={{ marginLeft: "5px" }}>
            x
          </button>
        </div>
      ))}
    </div>
  );
};

export default SelectedValueBox;
