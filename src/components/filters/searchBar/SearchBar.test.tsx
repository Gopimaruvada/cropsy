import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import SearchBar from "./searchBar";

test("renders SearchBar component correctly", () => {
  const { getByPlaceholderText } = render(
    <SearchBar results={[]} onSelect={() => {}} />
  );

  const searchBar = getByPlaceholderText("Search...");
  expect(searchBar).toBeInTheDocument();
});

test("fetches and displays search results correctly", async () => {
  const mockResults = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
  ];

  const mockOnSelect = jest.fn();
  const { getByPlaceholderText, getByText } = render(
    <SearchBar results={mockResults} onSelect={mockOnSelect} />
  );

  const searchBar = getByPlaceholderText("Search...");
  fireEvent.change(searchBar, { target: { value: "apple" } });

  await waitFor(() => {
    const appleResult = getByText("Apple");
    fireEvent.click(appleResult);

    expect(mockOnSelect).toHaveBeenCalledWith(mockResults[0]);
  });
});

// Add more test cases to cover other functionalities
