import { fireEvent, render, screen } from '@testing-library/react';
import { ZustandCounter } from '../ZustandCounter';
import { useStore } from '../ZustandStore';

const originalState = useStore.getState();
beforeEach(() => {
  useStore.setState(originalState);
});

test('add one', () => {
  render(<ZustandCounter />);

  const counter = screen.getByRole('contentinfo');
  const addButton = screen.getByText(/Increment/i);
  fireEvent.click(addButton);
  expect(counter).toHaveTextContent('1');
});

test('add two', () => {
  render(<ZustandCounter />);

  const counter = screen.getByRole('contentinfo');
  const addButton = screen.getByText(/Increment/i);
  fireEvent.click(addButton);
  expect(counter).toHaveTextContent('1');
});
