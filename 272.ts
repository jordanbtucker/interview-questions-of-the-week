/*
https://buttondown.email/cassidoo/archive/keep-your-face-to-the-sunshine-and-you-cannot-see-1741/

Print the ASCII printable characters code page (0x20-0x7E), without any
built-ins or functions that do it for you.

Characters to be printed:

 !"#$%&'()*+,-./
0123456789:;<=>?
@ABCDEFGHIJKLMNO
PQRSTUVWXYZ[\]^_
`abcdefghijklmno
pqrstuvwxyz{|}~
*/

export function asciiPrintable(): string {
  // The instructions are unclear, so in an effort to keep things simple and use
  // as few built-ins and functions as possible...
  return ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~'
}
