/*
https://buttondown.email/cassidoo/archive/the-best-prophet-of-the-future-is-the-past-lord/

You are given a list of positive integers which represents some range of
integers which has been truncated. Find the missing bits, insert ellipses to
show that that part has been truncated, and print it. If the consecutive values
differ by exactly two, then insert the missing value.

Examples:

> missingBits([1,2,3,4,20,21,22,23])
> "[1,2,3,4,...,20,21,22,23]"

> missingBits([1,2,3,5,6])
> "[1,2,3,4,5,6]"

> missingBits([1,3,20,27])
> "[1,2,3,...,20,...,27]"
*/

export function missingBits(array: number[]): string {
  const bits: (number | '...')[] = [array[0]]
  for (let i = 1; i < array.length; i++) {
    const last = array[i - 1]
    const current = array[i]
    if (current === last + 1) {
      bits.push(current)
    } else if (current === last + 2) {
      bits.push(current - 1, current)
    } else {
      bits.push('...', current)
    }
  }

  return `[${bits.join(',')}]`
}
