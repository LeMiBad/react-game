import { createSlice } from "@reduxjs/toolkit";

const badBlock = [undefined, 'water', 'produced', 'none'];

const find: Function = (area: Array<Array<string>>) => {
    let y = 0,
        x = 0;
    area.forEach((item: Array<string>, index: number) => {
        item.forEach((i, ind) => {
            if(i === 'active'){
                x = ind
                y = index
            }
        })
    })
    return [y, x]
}

const isLose = (gameArea: Array<Array<string>>) => {
    let isWin: boolean = true

    gameArea.forEach((item: Array<string>) => {
        item.forEach((i) => {
            if(i === 'full'){
                isWin = false;
            }
        })
    })
    if(isWin) return 'win'


    const [y, x] = find(gameArea)
    let arrayCounter = 0;

    (!badBlock.includes(gameArea[y-1][x]))? arrayCounter = arrayCounter - 1 : arrayCounter = arrayCounter + 1;
    (!badBlock.includes(gameArea[y][x+1]))? arrayCounter = arrayCounter - 1 : arrayCounter = arrayCounter + 1;
    (!badBlock.includes(gameArea[y+1][x]))? arrayCounter = arrayCounter - 1 : arrayCounter = arrayCounter + 1;
    (!badBlock.includes(gameArea[y][x-1]))? arrayCounter = arrayCounter - 1 : arrayCounter = arrayCounter + 1;

    if(arrayCounter === 4) return 'loose' 
}

const gameSlice = createSlice({
    name: 'game',
    initialState: {
        victoryState: 'in-game',
        currentGameArea: [],
        gameArea: [['none', 'none', 'none'],['none', 'active', 'none'],['none',  'none',  'none'],],
        possiblePickData: [],
        lvlPickData: [
            [
                'active',
                'uncompleted',
                'uncompleted',
                'uncompleted',
                'uncompleted',
                'uncompleted'
            ],
            [
                'uncompleted',
                'uncompleted',
                'uncompleted',
                'uncompleted',
                'uncompleted',
                'uncompleted',
            ],
            [
                'uncompleted',
                'uncompleted',
                'uncompleted',
                'uncompleted',
                'uncompleted',
                'uncompleted',
            ]
        ]

    },
    reducers: {
        setPossiblePickData (state, possiblePickData) {
            state.possiblePickData = possiblePickData.payload
        },
        setLevel (state, gameArea) {
            state.gameArea = gameArea.payload
            state.currentGameArea = gameArea.payload
        },
        inGame: (state) => {
            if(state.victoryState === 'loose'){
                state.gameArea = state.currentGameArea
            } 
            state.victoryState = 'in-game'
        },
        looseEnd (state) {
            console.log(state)
            state.victoryState = 'loose'
        },
        winEnd (state) {
            state.lvlPickData = state.possiblePickData
            state.victoryState = 'win'
        },
        moveUp (state) {
            const [y, x] = find(state.gameArea)
            if(badBlock.includes(state.gameArea[y-1][x])){}
            else{
                state.gameArea[y][x] = 'produced'
                state.gameArea[y-1][x] = 'active'
            }
            if(isLose(state.gameArea) === 'win') gameSlice.caseReducers.winEnd(state)
            if(isLose(state.gameArea) === 'loose') gameSlice.caseReducers.looseEnd(state)

        },
        moveRight (state) {
            const [y, x] = find(state.gameArea)
            if(badBlock.includes(state.gameArea[y][x+1])){}
            else{
                state.gameArea[y][x] = 'produced'
                state.gameArea[y][x+1] = 'active'
            }
            if(isLose(state.gameArea) === 'win') gameSlice.caseReducers.winEnd(state)
            if(isLose(state.gameArea) === 'loose') gameSlice.caseReducers.looseEnd(state)
        },
        moveDown (state) {
            const [y, x] = find(state.gameArea)
            if(badBlock.includes(state.gameArea[y+1][x])){}
            else{
                    state.gameArea[y][x] = 'produced'
                    state.gameArea[y+1][x] = 'active'
            }
            if(isLose(state.gameArea) === 'win') gameSlice.caseReducers.winEnd(state)
            if(isLose(state.gameArea) === 'loose') gameSlice.caseReducers.looseEnd(state)
        },
        moveLeft (state) {
            const [y, x] = find(state.gameArea)
            if(badBlock.includes(state.gameArea[y][x-1])){}
            else{
                state.gameArea[y][x] = 'produced'
                state.gameArea[y][x-1] = 'active'
            }
            if(isLose(state.gameArea) === 'win') gameSlice.caseReducers.winEnd(state)
            if(isLose(state.gameArea) === 'loose') gameSlice.caseReducers.looseEnd(state)
        }
    }
})

export const { setPossiblePickData,  inGame, setLevel, moveUp, moveRight, moveDown, moveLeft} = gameSlice.actions;

export default gameSlice.reducer;