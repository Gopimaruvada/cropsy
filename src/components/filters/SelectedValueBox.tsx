// src/SelectedValueBox.tsx

import React from 'react';

import {SearchResult} from "../../Models/index"

interface SelectedValueBoxProps {
  selectedValues: SearchResult[];
  onRemove: (value: SearchResult) => void;
}

const SelectedValueBox: React.FC<SelectedValueBoxProps> = ({ selectedValues, onRemove }) => {
  return (
    <div style={{ backgroundColor: 'white', padding: '10px', margin: '10px', display: 'flex', flexWrap: 'wrap' }}>
      {selectedValues.map(value => (
        <div key={value.id} style={{ display: 'flex', alignItems: 'center', marginRight: '10px', marginBottom: '5px' }}>
          <span>{value.name}</span>
          <button onClick={() => onRemove(value)} style={{ marginLeft: '5px' }}>x</button>
        </div>
      ))}
    </div>
  );
};

export default SelectedValueBox;
