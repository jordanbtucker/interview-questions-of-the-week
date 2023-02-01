import { generateBoard, getTouching } from './277.ts'

Deno.test('277.1', () => {
  // This is not the best test since it just reuses code used in the
  // implementation of generateBoard.
  const board = generateBoard()
  for (let r = 0; r < board.length; r++) {
    const row = board[r]
    for (let c = 0; c < row.length; c++) {
      const hex = row[c]
      if (
        (hex === '6' || hex === '8') &&
        getTouching([r, c]).some(([r, c]) =>
          board[r]?.[c] === '6' || board[r]?.[c] === '8'
        )
      ) {
        throw new Error()
      }
    }
  }
})
