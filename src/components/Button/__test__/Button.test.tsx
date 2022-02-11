import { fireEvent, render, screen } from '@testing-library/react';
import Button from '../Button';

test('should render button', () => {
  const onClick = jest.fn();
  render(<Button title="Add Item" onClick={onClick} />);
  const buttonElement = screen.getByText('Add Item');

  fireEvent.click(buttonElement);
  expect(onClick).toHaveBeenCalledTimes(1);
});
