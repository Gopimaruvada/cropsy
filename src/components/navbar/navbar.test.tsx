// In your test file
import React from 'react';
import { render } from '@testing-library/react';
import Navbar from '../../components/navbar/navbar'; // Import the component that uses the SVG

// Mock the SVG import
jest.mock('../../images/logo-grey.svg', () => 'mocked-svg-path');

test('renders component with mocked SVG', () => {
  const { getByAltText } = render(<Navbar />);
  const svgElement = getByAltText('Logo');
  // Your test assertions
});
