import {Board, Cell, GameOfLife} from '../game_of_life'

describe('GameOfLife', () => {
  test('an alive cell dies when surround only by dead cells', () => {
    // Arrange
    const game = new GameOfLife(fromTestBoard([
      ['O', 'O', 'O'],
      ['O', 'X', 'O'],
      ['O', 'O', 'O'],
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

  test('', () =>{
    //Arrange
    const game = new GameOfLife(fromTestBoard([
      ['O', 'X', 'X'],
      ['O', 'X', 'O'],
      ['O', 'O', 'O'],
  ]))
    //act
    game.evolve();
    //assert
    expect(game.getBoard()).toEqual(fromTestBoard([
      ['O', 'X', 'X'],
      ['O', 'X', 'X'],
      ['O', 'O', 'O'],
    ]))
  })
})

function fromTestBoard(board: ('X' | 'O')[][]): Board {
  return board.map(row => row.map(cell => cell === 'X' ? Cell.Alive : Cell.Dead))
}
