import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

// test('Load and displays starter data', async () => {
//   render(<App />);
//   const name = await waitFor(() => screen.findByTestId('personInfo'));
//   expect(name).toHaveTextContent(`Name:`, `Age:`, `Gender:`)
// });

// test('Can change the name', async () => {
//   render(<App />);
//   const input = screen.getByTestId('name-input');
//   const name = screen.getByTestId('personInfo');
//   fireEvent.change(input, {target: {value: 'Hassan'}});
//   expect(name).toHaveTextContent(`Hassan`)
// })

test(('check title'), async () => {
  render(<App />);
  const title = await waitFor(() => screen.findByTestId('title'));
  expect(title).toHaveTextContent(`Useless New Age Calculator`)
})