// src/App.tsx

import React, { useState } from 'react';
import SelectedValueBox from './SelectedValueBox';
import SearchBar from '../filters/searchBar';

interface SearchResult {
  id: number;
  name: string;
}

const Filters: React.FC = () => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleSelect = (selectedValue: string) => {
    setSelectedValues([...selectedValues, selectedValue]);
  };

  const handleRemoveValue = (valueToRemove: string) => {
    const updatedValues = selectedValues.filter(value => value !== valueToRemove);
    setSelectedValues(updatedValues);
  };

  return (
    <div className="App">
      {/* Pass initial results to SearchBar */}
      <SearchBar results={[]} onSelect={handleSelect} />

      {/* Display selected values in SelectedValueBox */}
      {selectedValues.length > 0 && <SelectedValueBox selectedValues={selectedValues} onRemove={handleRemoveValue} />}

      <button className="Filter-button">
        Apply Filter
      </button>
    </div>
  );
};

export default Filters;
