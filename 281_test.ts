import { assertEquals } from 'https://deno.land/std@0.175.0/testing/asserts.ts'
import { maxSubarray } from './281.ts'

Deno.test('281.1', () => {
  assertEquals(maxSubarray([-4, 2, -5, 1, 2, 3, 6, -5, 1], 4), [1, 2, 3, 6])
})

Deno.test('281.2', () => {
  assertEquals(maxSubarray([1, 2, 0, 5], 2), [0, 5])
})
