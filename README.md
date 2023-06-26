# smile-queue

[![](https://img.shields.io/bundlephobia/minzip/smile-queue?label=bundle%20size)](https://bundlephobia.com/package/smile-queue) [![Version](https://img.shields.io/npm/v/smile-queue)](https://www.npmjs.com/package/zustand) [![Downloads](https://img.shields.io/npm/dt/smile-queue.svg)](https://www.npmjs.com/package/smile-queue)

micro and efficient queue

You should use this package instead of an array if you do a lot of `Array#push()` and `Array#shift()` on large arrays, since `Array#shift()` has [linear time complexity](<https://medium.com/@ariel.salem1989/an-easy-to-use-guide-to-big-o-time-complexity-5dcf4be8a444#:~:text=O(N)%E2%80%94Linear%20Time>) _O(n)_ while `Queue#dequeue()` has [constant time complexity](<https://medium.com/@ariel.salem1989/an-easy-to-use-guide-to-big-o-time-complexity-5dcf4be8a444#:~:text=O(1)%20%E2%80%94%20Constant%20Time>) _O(1)_. That makes a huge difference for large arrays.

> A [queue](<https://en.wikipedia.org/wiki/Queue_(abstract_data_type)>) is an ordered list of elements where an element is inserted at the end of the queue and is removed from the front of the queue. A queue works based on the first-in, first-out ([FIFO](<https://en.wikipedia.org/wiki/FIFO_(computing_and_electronics)>)) principle.

## Install

```
$ npm install smile-queue
$ yarn add smile-queue
$ pnpm install smile-queue
```

## Usage

```js
import { SmileQueue } from 'smile-queue';

const queue = new SmileQueue();

queue.enqueue('🍊');
queue.enqueue('🍎');

console.log(queue.size);
//=> 2

console.log(...queue);
//=> '🍊 🍎'

console.log(queue.dequeue());
//=> '🍊'

console.log(queue.dequeue());
//=> '🍎'
```

## API

### `queue = new SmileQueue()`

The instance is an [`Iterable`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols), which means you can iterate over the queue front to back with a "for…of" loop, or use spreading to convert the queue to an array. Don't do this unless you really need to though, since it's slow.

#### `.enqueue(value)`

Add a value to the queue.

#### `.dequeue()`

Remove the next value in the queue.

Returns the removed value or `undefined` if the queue is empty.

#### `.clear()`

Clear the queue.

#### `.size`

The size of the queue.
