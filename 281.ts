/*
https://buttondown.email/cassidoo/archive/from-a-small-seed-a-mighty-trunk-may-grow/

Given an array of integers arr and an integer n, return a subarray of arr of
length n where the sum is the largest. Make sure you maintain the order of the
original array, and if n is greater than arr.length, you can choose what you
want to return.

Example:

> maxSubarray([-4,2,-5,1,2,3,6,-5,1], 4)
> [1,2,3,6]

> maxSubarray([1,2,0,5], 2)
> [0,5]
*/

export function maxSubarray(arr: number[], n: number): number[] {
  const len = Math.min(n, arr.length)
  let greatest: { sum: number; sub: number[] } = {
    sum: Number.MIN_VALUE,
    sub: [],
  }

  for (let i = 0; i <= arr.length - len; i++) {
    const sub = arr.slice(i, i + len)
    const sum = sub.reduce((a, b) => a + b)
    if (sum > greatest.sum) {
      greatest = { sum, sub }
    }
  }

  return greatest.sub
}
