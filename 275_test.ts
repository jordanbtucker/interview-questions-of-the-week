import { assertEquals } from 'https://deno.land/std@0.175.0/testing/asserts.ts'
import { verticalSlashes } from './275.ts'

Deno.test('275.1', () => {
  assertEquals(
    verticalSlashes('\\\\\\//\\/\\\\'),
    `\\
 \\
  \\
  /
 /
 \\
 /
 \\
  \\`,
  )
})

Deno.test('275.2', () => {
  assertEquals(
    verticalSlashes('\\\\\\\\'),
    `\\
 \\
  \\
   \\`,
  )
})
