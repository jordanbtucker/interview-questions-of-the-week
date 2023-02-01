import { assertEquals } from 'https://deno.land/std@0.175.0/testing/asserts.ts'
import { replaceZeros } from './280.ts'

Deno.test('280.1', () => {
  assertEquals(replaceZeros('1234500362000440'), 1234523623441)
})

Deno.test('280.2', () => {
  assertEquals(replaceZeros('123450036200044'), 123452362344)
})

Deno.test('280.3', () => {
  assertEquals(replaceZeros('000000000000'), 12)
})

Deno.test('280.4', () => {
  assertEquals(replaceZeros('123456789'), 123456789)
})
