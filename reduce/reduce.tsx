
import React, { ReactNode } from "react";

const func = () => {
    const arr = [0, 1, 2]
    arr.reduce<number>((accumulator, current) => {
        return accumulator + current
    }, 0);
}


const func1 = () => {
    const arr = [0, 1, 2];
    type Accumulator = { sum: number }
    const initialValue: Accumulator = { sum: 0 }
    arr.reduce<Accumulator>((accumulator, current) => {
        const newSum = accumulator.sum + current;
        const newAccumulator: Accumulator = { sum: newSum };
        return newAccumulator;
    }, initialValue);
}


const func2 = () => {
    const arr = [0, 1, 2];
    type Accumulator = { sum: number, nodes: ReactNode[] };
    const initialValue: Accumulator = { sum: 0, nodes: [] };

    arr.reduce<Accumulator>((accumulator, current) => {
        const newSum = accumulator.sum + current;
        
        const newNode = <>current is: {current}</>;
        const newNodes = [...accumulator.nodes, newNode];
        
        const newAccumulator: Accumulator = { sum: newSum, nodes: newNodes };
        return newAccumulator;
    }, initialValue);
}


const func3 = () => {
    const arr = [0, 1, 2]
    type Accumulator = number;
    arr.reduce<Accumulator>((accumulator, current) => {
        //return accumulator + current
        const newAccumulator: Accumulator = accumulator + current;
        return newAccumulator;
    }, 0);
}
