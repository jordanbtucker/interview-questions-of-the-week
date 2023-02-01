import { assertEquals } from './deps/assert.ts'
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
