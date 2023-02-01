import { assertEquals, assertThrows } from './deps/assert.ts'
import { Game, SpinResult } from './283.ts'

Deno.test('283.1', () => {
  const game = new Game(0)
  assertThrows(() => {
    game.spin(1)
  })
})

Deno.test('283.2', () => {
  let game: Game
  let spin: SpinResult
  do {
    game = new Game(10)
    spin = game.spin(5)
  } while (spin.result !== 'win')

  assertEquals(game.balance, 20)
})

Deno.test('283.3', () => {
  let game: Game
  let spin: SpinResult
  do {
    game = new Game(10)
    spin = game.spin(5)
  } while (spin.result !== 'lose')

  assertEquals(game.balance, 5)
})

Deno.test('283.4', () => {
  let game: Game
  let spin: SpinResult
  do {
    game = new Game(10)
    spin = game.spin(5)
  } while (spin.result !== 'break-even')

  assertEquals(game.balance, 10)
})
