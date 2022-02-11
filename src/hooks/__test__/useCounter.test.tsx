import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils';
import { useCounter } from '../useCounter';

test('should increment', () => {
  const { result } = renderHook(() => useCounter());
  act(() => {
    result.current.increment();
  });
  expect(result.current.count).toBe(1);
});
