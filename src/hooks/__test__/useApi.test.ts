import { renderHook } from '@testing-library/react-hooks';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { useAPI } from '../useApi';

const server = setupServer(
  rest.get('/api', (req, res, ctx) => {
    return res(ctx.json({ name: 'Jack' }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('should render useApi hook', async () => {
  const { result, waitForNextUpdate } = renderHook(() => useAPI());

  await waitForNextUpdate();

  expect(result.current).toEqual({ name: 'Jack' });
});
