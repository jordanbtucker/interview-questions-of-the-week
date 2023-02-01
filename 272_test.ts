import { asciiPrintable } from './272.ts'
import { assertEquals } from './deps/assert.ts'

Deno.test('272.1', () => {
  assertEquals(
    asciiPrintable(),
    ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~',
  )
})
