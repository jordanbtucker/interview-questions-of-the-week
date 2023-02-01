/*
https://buttondown.email/cassidoo/archive/i-dont-think-of-all-the-misery-but-of-the-beauty-4964/

Given a positive integer n, return all of its anti-divisors. Anti-divisors are
numbers that do not divide a number by the largest possible margin (1 is not an
anti-divisor of any number). [More information
here!](https://oeis.org/A066272/a066272a.html)

Example:

> antidivisor(1)
> []

> antidivisor(3)
> [2]

> antidivisor(5)
> [2,3]

> antidivisor(10)
> [3,4,7]

> antidivisor(234)
> [4,7,12,36,52,67,156]
*/

export function antidivisor(n: number): number[] {
  const r: number[] = []

  for (let k = 2; k <= n; k++) {
    if (k % 2 === 0) {
      if (n % k === k / 2) {
        r.push(k)
      }
    } else {
      if ((n % k === (k - 1) / 2) || (n % k === (k + 1) / 2)) {
        r.push(k)
      }
    }
  }

  return r
}
