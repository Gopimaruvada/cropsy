import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import SearchBar from "./searchBar";
import '@testing-library/jest-dom/extend-expect';

test("renders SearchBar component correctly", () => {
  const { getByPlaceholderText } = render(
    <SearchBar results={[]} onSelect={() => {}} />
  );

  const searchBar = getByPlaceholderText("Search...");
  expect(searchBar).toBeInTheDocument();
});

test("fetches and displays search results correctly", async () => {
  const mockResults = [
    {
        "id": 462,
        "name": "CFPN01"
    },
    {
        "id": 463,
        "name": "CFPN02"
    },
    {
        "id": 464,
        "name": "CFPN03"
    },
    {
        "id": 465,
        "name": "CFPN04"
    },
    {
        "id": 466,
        "name": "CFSV01"
    },
    {
        "id": 467,
        "name": "CFSV02"
    },
    {
        "id": 468,
        "name": "CFSV03"
    },
    {
        "id": 469,
        "name": "BEPN01"
    },
    {
        "id": 470,
        "name": "BEPN02"
    },
    {
        "id": 471,
        "name": "BEPG01"
    },
    {
        "id": 472,
        "name": "BEPG02"
    },
    {
        "id": 473,
        "name": "BEPG03"
    }
]

  const mockOnSelect = jest.fn();
  const { getByPlaceholderText, getByText } = render(
    <SearchBar results={mockResults} onSelect={mockOnSelect} />
  );

  const searchBar = getByPlaceholderText("Search...");
  fireEvent.change(searchBar, { target: { value: "CFPN01" } });

  await waitFor(() => {
    const appleResult = getByText("CFPN01");
    fireEvent.click(appleResult);

    expect(mockOnSelect).toHaveBeenCalledWith(mockResults[0]);
  });
});

// Add more test cases to cover other functionalities
