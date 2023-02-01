/*
https://buttondown.email/cassidoo/archive/i-never-regretted-what-i-turned-down-angela/

Let’s say you have n doors that start out as closed. With the first pass across
the doors, you toggle every door open. With the second pass, you toggle every
second door. With the third, every third door, and so on. Write a function that
takes in an integer numberOfPasses, and returns how many doors are open after
the number of passes. Thanks Max for inspiring this question!

Example:

let n = 7
let numberOfPasses = 3

> passDoors(n, numberOfPasses)
> 4

// Explanation:
// 0 means open, 1 means closed
// Initial: 1 1 1 1 1 1 1
// Pass 1:  0 0 0 0 0 0 0
// Pass 2:  0 1 0 1 0 1 0
// Pass 3:  0 1 1 1 0 0 0
*/

export function passDoors(n: number, numberOfPasses: number): number {
  // Use an integer to represent the doors where each door is a bit, and 0 means
  // closed while 1 means open.
  let doors = 0

  // Perform the necessary number of passes.
  for (let i = 0; i < numberOfPasses; i++) {
    // Cycle through each door, toggling the bit. We use i to determine the nth
    // doors to toggle.
    for (let j = 0; j < n; j += i + 1) {
      doors ^= 1 << j
    }
  }

  // Finally, count all the set bits in doors.
  let count = 0
  while (doors > 0) {
    count += doors & 1
    doors = doors >>> 1
  }

  return count
}
