# JavaScript Loose Comparison Gotchas: NaN and -0

This example demonstrates unexpected behavior of JavaScript's loose comparison (`==`) operator with `NaN` (Not a Number) and `-0`.

## The Bug

The `foo` function intends to check if two values are equal. However, due to how loose comparison works:

- `NaN` is never equal to itself (`NaN == NaN` is `false`).
- `-0` is equal to `+0` (`-0 == 0` is `true`).

This leads to incorrect results.

## Solution

The recommended approach is to use strict equality (`===`) or a more robust comparison method that handles `NaN` and `-0` appropriately.

## How to run

1. Clone the repository.
2. Run `node bug.js` to observe the erroneous results.
3. Run `node bugSolution.js` to see the corrected behavior.