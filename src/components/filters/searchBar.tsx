// src/SearchBar.tsx

import React, { useState, useEffect } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { getBlocks } from "../../services/apiService"
import "./Filter.css";

interface BlockOption {
  id: number;
  name: string;
}

interface SearchBarProps {
  results: BlockOption[];
  onSelect: (selectedId: any) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSelect }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResults, setSearchResults] = useState<BlockOption[]>([]);

  useEffect(() => {
    if (searchTerm) {
      fetchSearchResults(searchTerm);
    } else {
      setSearchResults([]); // Clear search results if search term is empty
    }
  }, [searchTerm]);

  const fetchSearchResults = async (term: string) => {
    try {
      const blocks = await getBlocks(term); // Call the API with the search term

      // Map the response data to BlockOption format (id as value and name as label)
      const blockOptions: BlockOption[] = blocks?.map((block:any) => ({
        id: block.id,
        name: block.name,
      }));
 console.warn(blockOptions)
      setSearchResults(blockOptions);
    } catch (error) {
      console.error("Error fetching search results:", error);
      setSearchResults([]);
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.toUpperCase());
  };

  const handleResultClick = (selectedBlock: BlockOption) => {
    onSelect(selectedBlock.name);
    setSearchTerm('');
    setSearchResults([]); // Clear search results after selecting
  };

  return (
    <div className="search-bar">
      <div className="search-input-container">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search..."
          className="search-input"
        />
        {searchTerm ? (
          <FaTimes className="clear-icon" onClick={() => setSearchTerm('')} />
        ) : (
          <FaSearch className="search-icon" />
        )}
      </div>
      <ul className="search-results">
        {searchResults.map(result => (
          <li key={result.id} onClick={() => handleResultClick(result)}>
            {result.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
