import { render, screen } from '@testing-library/react';
import SideBar from '../SideBar';

test('renders sidebar list', () => {
  const items = [{ name: 'test', href: '/href' }];

  render(<SideBar items={items} />);
  const anchorElements = screen.getAllByRole('navigation');
  expect(anchorElements[0]).toHaveTextContent(items[0].name);
  expect(anchorElements[0]).toHaveAttribute('href', items[0].href);
});
