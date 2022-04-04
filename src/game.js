class GameLogic {
    playerX = 0
    Machine = 0
    
    playerTurn = () => {
        if (playerX == "B0") {
            return machine == "B4"
        } if (playerX == "B1") {
            return machine == "B2"
        } if (playerX == "B6") {
            return machine == "B5"
        } if (playerX == "B7") {
            return machine == "B8"
        }

        else if (playerX == "B1") {
            return machine == "B4"
        } if (playerX == "B0") {
            return machine == "B2"
        } if (playerX == "B6") {
            return machine == "B3"
        } if (playerX == "B5") {
            return machine == "B7"
        } if (playerX == "B8") {
            return "Draw"
        }
        else if (playerX == "B4") {
            return machine == "B0"
        } if (playerX == "B1") {
            return machine == "B7"
        } if (playerX == "B2") {
            return machine == "B6"
        } if (playerX == "B3") {
            return machine == "B8"
        } else if (player == "B8"){
            return machine == "B3"
        } if (player == "B8") {
            return machine == "B3"
        }
            
            
        else if (playerX == "B2") {
            return machine == "B6"
        } else if (playerX == "B3") {
            return machine == "B5"
        } else if (playerX == "B5") {
            return machine == "B3"
        } else if (playerX == "B6") {
            return machine == "B2"
        } else if (playerX == "B7") {
            return machine == "B1"
        }
}    }
}
module.exports = {
    GameLogic
}