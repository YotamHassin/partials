import React, { FC, useState } from "react";

// src/t.ts — corrected insertion sort (returns a new array)
// Generic over T with an optional comparator

export type Compare<T> = (a: T, b: T) => number;

export const defaultCompare: Compare<any> = (a: any, b: any) => {
  if (a === b) return 0;
  return a > b ? 1 : -1;
};

/* i run forwards from 1 to length-1, 
  i acts as a handler, 
  iteration i checks (compare) element at index i (key), 
  if element at index i (key) need sorting or not, 

* if sorting needed at element at index i (key), 
  iteration i creates j, 
  an iterative agent that sends backwards (itarate) from i-1 to 0,
  the iterative j agent, desides (compare) where to insert, 
  element at index i (key), in the sorted prefix to its left.
   */



/**
 * Insertion sort (async) — returns a new sorted array.
 *
 * This implementation is generic and accepts an optional comparator.
 * It's intentionally async so callers can await it when integrating
 * with async workflows (for example, to yield to the event loop
 * between heavy sorts or to integrate with UI progress updates).
 *
 * @template T - element type
 * @param input - array to sort (will not be mutated)
 * @param compare - comparator returning >0 if a>b, 0 if equal, <0 if a<b
 * @returns Promise that resolves to a new sorted array
 */
export const insertionSort = async <T>(
  input: T[],
  compare: Compare<T> = defaultCompare
): Promise<T[]> => {
  if (!Array.isArray(input)) {
    throw new TypeError("input must be an array");
  }

  // Work on a shallow copy to avoid mutating the caller's array.
  const a = input.slice();

  // Standard insertion sort: iterate the array, inserting each element
  // into the sorted prefix to its left.
  for (let i = 1; i < a.length; i++) {
    const key = a[i]; // element to insert
    let j = i - 1; // scan index for the sorted prefix

    // Shift elements that are greater than `key` one position to the right.
    // j runs backwards from i-1 to 0,
    // special case: compare(a[j], key) == 0 to group same results.
    while (j >= 0 && compare(a[j], key) > 0) {
      a[j + 1] = a[j];
      j--;
    }

    // Place key into its correct position in the sorted prefix.
    a[j + 1] = key;

    // NOTE: This function is async to allow callers to await it.
    // It currently does not `await` inside the loop, but being async
    // makes it easier to later add yields (e.g., `await Promise.resolve()`)
    // if you want to keep the UI responsive for large inputs.
  }

  return a;
};

// Example usage:
// const sorted = insertionSort([3, 1, 2]);
// console.log(sorted); // [1,2,3]

// insertionSort([1, 2, 3]);

// insertionSort([3, 2, 1]);
// i = 0, a[i] = 3 - [3, 2, 1];
// i = 1, j = 0, a[i] = 2 - [2, 3, 1];
// i = 2, j = 0, a[i] = 1 - [2, 1, 3];
// i = 2, j = 1, a[i] = 1 - [1, 2, 3];

const sort = (
  arr = [1, 2, 3, 4, 5],
  // min = Math.min(...arr);
  min = -Infinity
) => {
  let lastItem = min;

  for (let i = 0; i < arr.length; i++) {
    //console.log(arr[i]);

    let item = arr[i];

    // compare item with lastItem,
    // if item is greater than or equal to lastItem.
    if (item > lastItem || item == lastItem) {
      // no action needed, is sorted.
      //console.log(item);
    }

    // sorted needed condition
    else {
      console.log("not sorted");
      for (let j = i; j >= 0; j--) {
        let prevItem = arr[j - 1];
        if (item >= prevItem) {
          // found position
          console.log("insert at position", j);
          arr.splice(j, 0, item);
          arr.splice(i, 1); // remove original
          continue;
        }
      }
    }

    // update key variable - lastItem
    lastItem = item;
  }
};
