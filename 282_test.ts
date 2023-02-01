import { assertEquals } from './deps/assert.ts'
import { sumEveryOther } from './282.ts'

Deno.test('282.1', () => {
  assertEquals(sumEveryOther(548915381), 26)
})

Deno.test('282.2', () => {
  assertEquals(sumEveryOther(10), 0)
})

Deno.test('282.3', () => {
  assertEquals(sumEveryOther(1010.11), 1)
})
