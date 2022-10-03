export interface gameState {
    victoryState: string
    currentGameArea: Array<Array<string>>
    gameArea: Array<Array<string>>
    possiblePickData: Array<string> | Array<Array<string>> 
    lvlPickData: any
    isLoading: boolean
}