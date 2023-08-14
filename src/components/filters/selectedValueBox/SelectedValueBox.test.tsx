import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SelectedValueBox from "./SelectedValueBox";

const mockSelectedValues = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
];

test("renders SelectedValueBox component correctly", () => {
  const mockOnRemove = jest.fn();
  const { getByText } = render(
    <SelectedValueBox selectedValues={mockSelectedValues} onRemove={mockOnRemove} />
  );

  const appleValue = getByText("Apple");
  const bananaValue = getByText("Banana");

  expect(appleValue).toBeInTheDocument();
  expect(bananaValue).toBeInTheDocument();
});

test("removes selected value when 'x' button is clicked", () => {
  const mockOnRemove = jest.fn();
  const { getByText } = render(
    <SelectedValueBox selectedValues={mockSelectedValues} onRemove={mockOnRemove} />
  );

  const appleValue = getByText("Apple");
  const removeButton = getByText("x");

  fireEvent.click(removeButton);

  expect(mockOnRemove).toHaveBeenCalledWith(mockSelectedValues[0]);
});

// Add more test cases to cover other functionalities
