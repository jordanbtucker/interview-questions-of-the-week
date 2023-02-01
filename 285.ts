/*
https://buttondown.email/cassidoo/archive/if-you-want-to-feel-good-you-have-to-go-out-and/

Given a positive integer, generate an array in which every element is an array
that goes from 1 to the index of that array.

Example:

> generateArrays(4)
> [[1], [1, 2], [1, 2, 3], [1, 2, 3, 4]]

> generateArrays(1)
> [[1]]
*/

export function generateArrays(n: number): number[][] {
  const array = []
  for (let i = 1; i <= n; i++) {
    const subarray = []
    for (let j = 1; j <= i; j++) {
      subarray.push(j)
    }

    array.push(subarray)
  }

  return array
}
