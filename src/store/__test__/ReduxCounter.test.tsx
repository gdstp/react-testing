import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from '../store';
import { ReduxCounter } from '../ReduxCounter';

test('incremente', () => {
  render(
    <Provider store={createStore()}>
      <ReduxCounter />
    </Provider>
  );
  const counter = screen.getByRole('contentinfo');
  expect(counter).toHaveTextContent('0');

  const addButton = screen.getByText(/Increment/i);
  fireEvent.click(addButton);
});

test('incremente again', () => {
  render(
    <Provider store={createStore()}>
      <ReduxCounter />
    </Provider>
  );
  const counter = screen.getByRole('contentinfo');
  expect(counter).toHaveTextContent('0');

  const addButton = screen.getByText(/Increment/i);
  fireEvent.click(addButton);
});
