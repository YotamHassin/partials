(async function () {
    function* fetchNumbers() {
        const arr = [0, 1, 25, 3, 4];
        //const arr1 = [0, 1];
        // return items in next
        yield* arr;

        // will finish the first yield then go to next yield
        //yield* arr1;

        // retern full array
        //const res = yield arr;

        // wll be run only whan yield* arr is over, in iterator.next() after last item.
        console.log('finish yield');
    }

    // best.
    const iterator = fetchNumbers()
    //console.log('iterator.next', iterator.next().value)

    // best, need async scope
    for await (const index of iterator) {
        console.log('iterator.next', index);        
    }
    
    // best in non async scope
    /*
    for (let index = iterator.next(); !index.done; index = iterator.next()) {
        console.log('iterator.next', index);
    } */

    // good: will not print the unnecessary t.done.
    /* var t = iterator.next();
    while (!t.done) {
        console.log('iterator.next', t)
        t = iterator.next();
    } */

    // noticed: will print the unnecessary t.done, with no data (value: undefined)
    /* var t;
    do {
        t = iterator.next();
        console.log('iterator.next', t)
    } while (!t.done); */


})();

/* iterator.next()
// {value: 0, done: false}
iterator.next()
// {value: 1, done: false}
iterator.next()
// {value: 25, done: false}
iterator.next()
// {value: 3, done: false}
iterator.next()
// {value: 4, done: false}
iterator.next()
// finish yield
// {value: undefined, done: true} */

