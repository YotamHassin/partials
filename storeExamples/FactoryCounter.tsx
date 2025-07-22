import React, { FC } from 'react'
import { useCounterCollectionStore } from './CounterCollectionStoreApi' // Import the store API
import { create } from 'zustand';


// This is a simple counter component that uses Zustand for state management

export const FactoryCounter: FC<{ id: string }> = ({ id = 'myCounter' }) => {
  //const { count, inc, reset } = useCounterCollectionStore();
  const { createCounter } = useCounterCollectionStore();

  const counterStore = createCounter(id, 0); // Create with initial count 0 or get the counter store.
  const { count, inc, reset } = counterStore();

  return (
    <div>
      <span>{count}</span>
      <button onClick={() => {
        const num = inc();
        console.log('message from Counter:', num);
      }}>one up</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export const FactoryCounters: FC = () => {
  const ids = ['counter1', 'counter2', 'counter3'];

  const counters = <>
    {(ids.map(id => (
      <>{id}: <FactoryCounter key={id} id={id} /></>
    )))}
  </>

  return (
    <>{counters}</>

  )
}

export default FactoryCounters;
// This component can be used to demonstrate the Factory pattern in Zustand
// where multiple instances of the counter can be created with different IDs.