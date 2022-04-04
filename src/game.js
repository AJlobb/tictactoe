class GameLogic {
    playerX = 0
    Machine = 0
    
    playerTurn = () => {
        if (playerX == "B0") {
            return machine == "B1"
        } if (playerX == "B3") {
            return machine == "B6"
        } if (playerX == "B4") {
            return machine == "B8"
        } if (playerX == "B5") {
            return "PlayerX Wins"
        }
}
}

module.exports = {
    GameLogic
}