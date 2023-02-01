/*
Given a list of strings arr, and a max size n, return a new list where the
strings (from left to right) are joined together with a space, so that each new
string is less than or equal to the max size.

Examples:

> combineStrings(["a", "b", "c", "d", "e", "f", "g"], 5)
> ["a b c", "d e f", "g"]

> combineStrings(["a", "b", "c", "d", "e", "f", "g"], 12)
> ["a b c d e f", "g"]

> combineStrings(["alpha", "beta", "gamma", "delta", "epsilon"], 20)
> ["alpha beta gamma", "delta epsilon"]
*/

export function combineStrings(arr: string[], n: number): string[] {
  const r: string[] = []

  for (const s of arr) {
    if (s.length > n) {
      throw new Error(
        'Each string in arr must have a length less than or equal to n',
      )
    }
  }

  outer:
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length; j >= i; j--) {
      const sub = arr.slice(i, j).join(' ')
      if (sub.length <= n) {
        r.push(sub)
        i = j - 1
        continue outer
      }
    }
  }

  return r
}
