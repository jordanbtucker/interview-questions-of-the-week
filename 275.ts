/*
https://buttondown.email/cassidoo/archive/normal-is-not-something-to-aspire-to-its-4437/

Write a function that takes a string of slashes (\ and /) and returns all of
those slashes drawn downwards in a line connecting them.

Example:

$ verticalSlashes('\\\//\/\\')
\
 \
  \
  /
 /
 \
 /
 \
  \
$ verticalSlashes('\\\\')
\
 \
  \
   \
*/

export function verticalSlashes(s: string): string {
  const lines = []
  let indent = 0
  let last = ''

  for (const c of s) {
    if (c === '\\' && last === '\\') {
      indent++
    } else if (c === '/' && last === '/') {
      indent--
    }

    last = c
    lines.push(' '.repeat(indent) + c)
  }

  return lines.join('\n')
}
