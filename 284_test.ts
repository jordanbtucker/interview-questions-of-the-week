import { assertEquals } from 'https://deno.land/std@0.175.0/testing/asserts.ts'
import { missingBits } from './284.ts'

Deno.test('284.1', () => {
  assertEquals(
    missingBits([1, 2, 3, 4, 20, 21, 22, 23]),
    '[1,2,3,4,...,20,21,22,23]',
  )
})

Deno.test('284.2', () => {
  assertEquals(missingBits([1, 2, 3, 5, 6]), '[1,2,3,4,5,6]')
})

Deno.test('284.3', () => {
  assertEquals(missingBits([1, 3, 20, 27]), '[1,2,3,...,20,...,27]')
})
