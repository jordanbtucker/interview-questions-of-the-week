/*
https://buttondown.email/cassidoo/archive/what-you-do-every-day-matters-more-than-what-you/

Given a number, sum every second digit in that number.

Example:

> sumEveryOther(548915381)
> 26 // 4+9+5+8

> sumEveryOther(10)
> 0

> sumEveryOther(1010.11)
> 1 // 0+0+1
*/

export function sumEveryOther(n: number): number {
  return Array.from(n.toString().replace(/\./g, ''))
    .map(Number)
    .filter((_n, index) => index % 2 === 1)
    .reduce((a, b) => a + b)
}
