/*
https://buttondown.email/cassidoo/archive/to-attract-something-that-you-want-become-as/

The Settlers of Catan board game has 18 number hexes (two each of 3, 4, 5, 6, 8,
9, 10, 11, and one each of 2 and 12), and one desert hex in a large hexagon
formation. Generate a valid randomized Catan board in which 6s and 8s cannot
touch each other.

Examples of valid boards:

// These use A B C for 10 11 12, respectively, and . for the empty desert hex.


  B 9 A
 5 6 C 8
6 4 B 5 3
 2 8 9 3
  A . 4

  B B C
 3 A 3 A
2 4 6 . 6
 4 5 9 9
  8 5 8

  6 3 8
 2 4 5 A
5 9 . 6 9
 A B 3 C
  8 4 B
*/

export type Hex =
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '8'
  | '9'
  | 'A'
  | 'B'
  | 'C'
  | '.'

export type Board = [
  [Hex, Hex, Hex],
  [Hex, Hex, Hex, Hex],
  [Hex, Hex, Hex, Hex, Hex],
  [Hex, Hex, Hex, Hex],
  [Hex, Hex, Hex],
]

const HEX_POOL: readonly Hex[] = [
  '2',
  '3',
  '3',
  '4',
  '4',
  '5',
  '5',
  '6',
  '6',
  '8',
  '8',
  '9',
  '9',
  'A',
  'A',
  'B',
  'B',
  'C',
  '.',
]

export function generateBoard(): Board {
  // Repeatedly generate boards until a valid one is generated.
  outer:
  for (;;) {
    // Randomly shuffle the pool of hexes.
    const pool = HEX_POOL.slice().sort(() => Math.random() < .5 ? -1 : 1)

    // Place the hexes on the board in the order they were shuffled.
    const board: Board = [
      [pool[0], pool[1], pool[2]],
      [pool[3], pool[4], pool[5], pool[6]],
      [pool[7], pool[8], pool[9], pool[10], pool[11]],
      [pool[12], pool[13], pool[14], pool[15]],
      [pool[16], pool[17], pool[18]],
    ]

    // Walk through each hex on the board to find 6s and 8s.
    for (let r = 0; r < board.length; r++) {
      const row = board[r]
      for (let c = 0; c < row.length; c++) {
        const hex = row[c]
        // If a 6 or 8 is found, get all of the hexes its touching and check if
        // any of them are also 6s or 8s.
        if (
          (hex === '6' || hex === '8') &&
          getTouching([r, c]).some(([r, c]) =>
            board[r]?.[c] === '6' || board[r]?.[c] === '8'
          )
        ) {
          // If the current hex is a 6 or 8 that is touching another 6 or 8,
          // generate a new board.
          continue outer
        }

        // The instructions were unclear as to whether all 6s and 8s cannot be
        // touching any other 6s or 8s, or whether 6s could only not touch 8s
        // and vice versa. The if statement above assumes the former, which
        // seems correct based on the examples, but to implement the latter,
        // replace it with the following if statement.

        // if (
        //   (hex === '6' &&
        //     getTouching([r, c]).some(([r, c]) => board[r]?.[c] === '8')) ||
        //   (hex === '8' &&
        //     getTouching([r, c]).some(([r, c]) => board[r]?.[c] === '6'))
        // ) {
        //   continue outer
        // }
      }
    }

    return board
  }
}

export type Coord = [r: number, c: number]

/**
 * Given a coord on a board, get all of the coords it can touch. This will
 * include coords that don't actually exist on the board, e.g. [-1, 0] and [1,
 * 4], so accessing those coords will return undefined.
 */
export function getTouching([r, c]: Coord): Coord[] {
  const touching: Coord[] = [[r, c - 1], [r, c + 1]]

  if (r <= 2) {
    touching.push([r - 1, c - 1], [r - 1, c])
  } else {
    touching.push([r - 1, c], [r - 1, c + 1])
  }

  if (r >= 2) {
    touching.push([r + 1, c - 1], [r + 1, c])
  } else {
    touching.push([r + 1, c], [r + 1, c + 1])
  }

  return touching
}
