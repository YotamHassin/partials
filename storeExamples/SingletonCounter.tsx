import React, { FC } from 'react'
import { useCounterStore } from './CounterStoreApi' // Import the store API


// This is a simple counter component that uses Zustand for state management
export const SingletonCounter: FC = () => {
  const { count, inc, reset } = useCounterStore();

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

export const SingletonCounters: FC = () => {
  const ids = ['counter1', 'counter2', 'counter3'];

  const counters = <>
    {(ids.map(id => (
      <>Singleton-{id}: <SingletonCounter key={id} /></>
    )))}
  </>

  return (
    <>{counters}</>

  )
}

export default SingletonCounters;
// This component can be used to demonstrate the Singleton pattern in Zustand
// where a single instance of the counter is shared across the application.