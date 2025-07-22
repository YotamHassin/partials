import React from 'react'
import { useCounterStore } from './CounterWrapperStoreApi' // Import the store API


// This is a simple counter component that uses Zustand for state management
export function CounterWrapper() {

  const { count: c, inc, reset } = useCounterStore();

  const count = c((state) => state);

  return (
    <div>
      <span>{count}</span>
      <button onClick={() => {
        const num = inc();
        console.log('message from Counter:', num);
      }}>one up log</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}