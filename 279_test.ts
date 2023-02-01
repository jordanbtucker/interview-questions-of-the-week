import { assertEquals } from 'https://deno.land/std@0.175.0/testing/asserts.ts'
import { capitalAfterVowel, capitalAfterVowelWithoutRegex } from './279.ts'

Deno.test('279.1', () => {
  assertEquals(capitalAfterVowel('hello world'), 'heLlo WoRld')
})

Deno.test('279.2', () => {
  assertEquals(capitalAfterVowel('xaabeuekadii'), 'xaaBeueKaDii')
})

Deno.test('279.3', () => {
  assertEquals(capitalAfterVowelWithoutRegex('hello world'), 'heLlo WoRld')
})

Deno.test('279.4', () => {
  assertEquals(capitalAfterVowelWithoutRegex('xaabeuekadii'), 'xaaBeueKaDii')
})
