import { antidivisor } from './273.ts'
import { assertEquals } from './deps/assert.ts'

Deno.test('273.1', () => {
  assertEquals(antidivisor(1), [])
})

Deno.test('273.2', () => {
  assertEquals(antidivisor(3), [2])
})

Deno.test('273.3', () => {
  assertEquals(antidivisor(5), [2, 3])
})

Deno.test('273.4', () => {
  assertEquals(antidivisor(10), [3, 4, 7])
})

Deno.test('273.5', () => {
  assertEquals(antidivisor(234), [4, 7, 12, 36, 52, 67, 156])
})
