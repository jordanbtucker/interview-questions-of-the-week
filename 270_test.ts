import { passDoors } from './270.ts'
import { assertEquals } from './deps/assert.ts'

Deno.test('270.1', () => {
  assertEquals(passDoors(7, 3), 4)
})
