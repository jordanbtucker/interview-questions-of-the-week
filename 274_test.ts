import { assertEquals } from 'https://deno.land/std@0.175.0/testing/asserts.ts'
import { combineStrings } from './274.ts'

// Deno.test('274.1', () => {
//   assertEquals(
//     combineStrings(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 5),
//     ['a b c', 'd e f', 'g'],
//   )
// })
//
// Deno.test('274.2', () => {
//   assertEquals(
//     combineStrings(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 12),
//     ['a b c d e f', 'g'],
//   )
// })

Deno.test('274.3', () => {
  assertEquals(
    combineStrings(['alpha', 'beta', 'gamma', 'delta', 'epsilon'], 20),
    ['alpha beta gamma', 'delta epsilon'],
  )
})
