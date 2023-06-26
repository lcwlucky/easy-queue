import SmileQueue from '../src';

it('.enqueue()', () => {
  const queue = new SmileQueue();
  queue.enqueue('🍊');
  expect(queue.dequeue()).toBe('🍊');
  queue.enqueue('🍊');
  queue.enqueue('🍇');
  expect(queue.dequeue()).toBe('🍊');
  expect(queue.dequeue()).toBe('🍇');
});

it('.dequeue()', () => {
  const queue = new SmileQueue();
  expect(queue.dequeue()).toBe(undefined);
  expect(queue.dequeue()).toBe(undefined);
  queue.enqueue('🍎');
  expect(queue.dequeue()).toBe('🍎');
  expect(queue.dequeue()).toBe(undefined);
});

it('.clear()', () => {
  const queue = new SmileQueue();
  queue.clear();
  queue.enqueue('🍊');
  queue.clear();
  expect(queue.size).toBe(0);
  queue.enqueue('🍊');
  queue.enqueue('🍎');
  queue.enqueue('🍇');
  queue.clear();
  expect(queue.size).toBe(0);
});

it('.size', () => {
  const queue = new SmileQueue();
  expect(queue.size).toBe(0);
  queue.clear();
  expect(queue.size).toBe(0);
  queue.enqueue('🍎');
  expect(queue.size).toBe(1);
  queue.enqueue('🍎');
  expect(queue.size).toBe(2);
  queue.dequeue();
  expect(queue.size).toBe(1);
  queue.dequeue();
  expect(queue.size).toBe(0);
  queue.dequeue();
  expect(queue.size).toBe(0);
});

it('iterable', () => {
  const queue = new SmileQueue();
  queue.enqueue('🍎');
  queue.enqueue('🍊');
  expect([...queue]).toEqual(['🍎', '🍊']);
});
