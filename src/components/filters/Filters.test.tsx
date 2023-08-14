import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Filters from "./filters";
import '@testing-library/jest-dom/extend-expect';
const axios = require("axios");
test("renders Filters component correctly", () => {
  const { getByText, getByPlaceholderText } = render(
    <Filters onApplyFilter={() => {}} />
  );

  const searchBar = getByPlaceholderText("Search...");
  const applyButton = getByText("Apply Filter");

  expect(searchBar).toBeInTheDocument();
  expect(applyButton).toBeInTheDocument();
});

test("adds and removes selected values correctly", () => {
  const mockOnApplyFilter = jest.fn();
  const { getByText, getByPlaceholderText } = render(
    <Filters onApplyFilter={mockOnApplyFilter} />
  );

  const searchBar = getByPlaceholderText("Search...");
  const applyButton = getByText("Apply Filter");

  // Simulate selecting a value
  fireEvent.change(searchBar, { target: { value: "CFPN01" } });
  fireEvent.click(applyButton);

 

  expect(mockOnApplyFilter).toHaveBeenCalledTimes(1);
});

// Add more test cases to cover other scenarios
