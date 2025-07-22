'use client';
import React, { } from 'react';

import { SingletonCounters } from './SingletonCounter';
import { FactoryCounters } from './FactoryCounter';

import useCounterStore from './WrapperStore/CounterWrapperStoreApi';
import { CounterWrapper } from './WrapperStore/CounterWrapper';

export const CounterStoreTests: React.FC = () => {
    /*  */
    const inc = useCounterStore((state => state.inc));

    return (
        <>
            <h4>CounterWrapper</h4>
            {/*  */}
            <CounterWrapper></CounterWrapper>
            <button onClick={inc}>one up</button>
            <hr />

            <h4>SingletonCounters</h4>
            {/*  */}
            <SingletonCounters></SingletonCounters>
            <hr />

            <h4>FactoryCounters</h4>
            {/*  */}
            <FactoryCounters></FactoryCounters>
            <button onClick={inc}>one up</button>
            <hr />
        </>
    );
}

export default CounterStoreTests;