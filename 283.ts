/*
https://buttondown.email/cassidoo/archive/the-man-who-moves-a-mountain-begins-by-carrying/

Implement a “spin the wheel” game where the player can bet on each spin of a
wheel and either double their money, lose their money, or keep their money. You
can choose how the user bets, and what data structures you might want to use for
the player and their money!
*/

export type SpinResult = {
  result: 'win' | 'lose' | 'break-even'
  balance: number
}

export class Game {
  private _balance: number

  constructor(balance: number) {
    this._balance = balance
  }

  get balance(): number {
    return this._balance
  }

  spin(bet: number): SpinResult {
    if (bet > this._balance) {
      throw new Error('Cannot bet more than current balance')
    }

    const random = Math.random()
    if (random < 1 / 3) {
      this._balance += bet * 2
      return { balance: this._balance, result: 'win' }
    } else if (random < 2 / 3) {
      this._balance -= bet
      return { balance: this._balance, result: 'lose' }
    } else {
      return { balance: this._balance, result: 'break-even' }
    }
  }
}
