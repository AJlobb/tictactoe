const {
    GameLogic
} = require('../game')

describe('check the game logic', () => {
    it('check if player X goes in B0 then machine will go in B7', () => {
        const game = new GameLogic()
        expect(game.playerX("B0")).toEqual(game.machine("B7"))
    })
})