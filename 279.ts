/*
https://buttondown.email/cassidoo/archive/dont-be-afraid-of-hard-work-nothing-worthwhile/

Given a string, make every consonant after a vowel uppercase. Can you do this
with and without regex?

Example:

> capitalAfterVowel("hello world")
> "heLlo WoRld"

> capitalAfterVowel("xaabeuekadii")
> "xaaBeueKaDii"
*/

export function capitalAfterVowel(s: string): string {
  return s.replace(
    /[aeiou][^aeioubcdfghjklmnpqrstvwxyz]*[bcdfghjklmnpqrstvwxyz]/gi,
    (match) =>
      match.substring(0, match.length - 1) +
      match[match.length - 1].toUpperCase(),
  )
}

export function capitalAfterVowelWithoutRegex(s: string): string {
  let r = ''
  outer:
  for (let i = 0; i < s.length; i++) {
    const v = s[i]
    r += v
    if (v === 'a' || v === 'e' || v === 'i' || v === 'o' || v === 'u') {
      for (let j = i + 1; j < s.length; j++) {
        const c = s[j]
        const n = c.codePointAt(0) as number
        if (
          n >= 0x61 &&
          n <= 0x7a &&
          !(c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u')
        ) {
          r += c.toUpperCase()
          i = j
          continue outer
        } else {
          r += c
        }
      }

      break
    }
  }

  return r
}
