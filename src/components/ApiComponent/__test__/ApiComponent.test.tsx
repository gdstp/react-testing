import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { APIComponent } from '../ApiComponent';

const server = setupServer(
  rest.get('/api', (req, res, ctx) => {
    return res(ctx.json({ name: 'Jack' }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('should render api component', async () => {
  render(<APIComponent />);

  const output = await waitFor(() => screen.findByRole('contentinfo'));
  expect(output).toHaveTextContent('Name is Jack');
});
