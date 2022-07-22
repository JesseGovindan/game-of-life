import {Board, Cell, GameOfLife} from '../game_of_life'

describe('GameOfLife', () => {
  test('an alive cell dies when surround only by dead cells', () => {
    // Arrange
    const game = new GameOfLife(fromTestBoard([
      ['O', 'O', 'O'],
      ['O', 'O', 'X'],
      ['O', 'O', 'X'],
    ]))
    // Act
    game.evolve()
    // Assert
    expect(game.getBoard()).toEqual(fromTestBoard([
      ['O', 'O', 'O'],
      ['O', 'O', 'O'],
      ['O', 'O', 'O'],
    ]))
  })
})

function fromTestBoard(board: ('X' | 'O')[][]): Board {
  return board.map(row => row.map(cell => cell === 'X' ? Cell.Alive : Cell.Dead))
}
