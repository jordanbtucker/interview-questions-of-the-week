import { assertEquals } from './deps/assert.ts'
import { generateArrays } from './285.ts'

Deno.test('285.1', () => {
  assertEquals(generateArrays(4), [[1], [1, 2], [1, 2, 3], [1, 2, 3, 4]])
})

Deno.test('285.2', () => {
  assertEquals(generateArrays(1), [[1]])
})
