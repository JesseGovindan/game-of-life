export enum Cell {
  Dead,
  Alive,
}
export type Board = Cell[][]

export class GameOfLife {
  constructor(initialPattern: Board) {
  }

  evolve() {
  }

  getBoard(): Board {
    return  [
      [Cell.Dead, Cell.Dead, Cell.Dead],
      [Cell.Dead, Cell.Dead, Cell.Dead],
      [Cell.Dead, Cell.Dead, Cell.Dead],
    ]
  }
}
