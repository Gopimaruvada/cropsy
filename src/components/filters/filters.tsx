import React, { useState } from 'react';
import SelectedValueBox from './SelectedValueBox';
import SearchBar from '../filters/searchBar';

interface BlockOption {
  id: number;
  name: string;
}

interface FiltersProps {
  onApplyFilter: (selectedValues: BlockOption[]) => void; // Add this prop
}

const Filters: React.FC<FiltersProps> = ({ onApplyFilter }) => {
  const [selectedValues, setSelectedValues] = useState<BlockOption[]>([]);
  const [selectedIdsForApi, setSelectedIdsForApi] = useState<number[]>([]);
  const handleSelect = (selectedValue: BlockOption) => {
    setSelectedValues([...selectedValues, selectedValue]);
  };

  const handleRemoveValue = (valueToRemove: BlockOption) => {
    const updatedValues = selectedValues.filter(
      (value) => value.id !== valueToRemove.id
    );
    setSelectedValues(updatedValues);
  };

  const handleApplyFilter = () => {
    const idsForApi = selectedValues.map((value) => value.id);
    setSelectedIdsForApi(idsForApi);
    onApplyFilter(selectedValues); 
    

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

      <button className="Filter-button" onClick={handleApplyFilter}>
        Apply Filter
      </button>
    </div>
  );
};

export default Filters;
