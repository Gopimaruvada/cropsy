import React, { useState } from 'react';
import SelectedValueBox from './SelectedValueBox';
import SearchBar from '../filters/searchBar';

interface BlockOption {
  id: number;
  name: string;
}

const Filters: React.FC = () => {
  const [selectedValues, setSelectedValues] = useState<BlockOption[]>([]); // Change the type of selectedValues

  const handleSelect = (selectedValue: BlockOption) => {
    setSelectedValues([...selectedValues, selectedValue]);
  };

  const handleRemoveValue = (valueToRemove: BlockOption) => {
    const updatedValues = selectedValues.filter(
      (value) => value.id !== valueToRemove.id // Filter based on id
    );
    setSelectedValues(updatedValues);
  };

  return (
    <div className="App">
      <SearchBar results={[]} onSelect={handleSelect} />

      {selectedValues.length > 0 && (
        <SelectedValueBox
          selectedValues={selectedValues}
          onRemove={handleRemoveValue}
        />
      )}

      <button className="Filter-button">Apply Filter</button>
    </div>
  );
};

export default Filters;
