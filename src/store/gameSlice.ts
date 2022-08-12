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
        gameArea: [
            ['none', 'none', 'none', 'none'],
            ['none', 'active', 'full', 'none'],
            ['none', 'full', 'full', 'none'],
            ['none', 'none', 'none', 'none'],
        ],
        victoryState: 'in-game',
    },
    reducers: {
        setLevel (state, gameArea) {
            state.gameArea = gameArea.payload
        },
        inGame: (state) => {
            state.victoryState = 'in-game'
        },
        looseEnd (state) {
            state.victoryState = 'loose'
        },
        winEnd (state) {
            state.victoryState = 'win'
        },
        moveUp (state) {
            const [y, x] = find(state.gameArea)
            if(badBlock.includes(state.gameArea[y-1][x])){console.log('Туда нельзя проходить!')}
            else{
                state.gameArea[y][x] = 'produced'
                state.gameArea[y-1][x] = 'active'
            }
            if(isLose(state.gameArea) === 'win') {console.log('Ты победил'); gameSlice.caseReducers.winEnd(state)}
            if(isLose(state.gameArea) === 'loose') {console.log('Ты проиграл'); gameSlice.caseReducers.looseEnd(state)}

        },
        moveRight (state) {
            const [y, x] = find(state.gameArea)
            if(badBlock.includes(state.gameArea[y][x+1])){console.log('Туда нельзя проходить!')}
            else{
                state.gameArea[y][x] = 'produced'
                state.gameArea[y][x+1] = 'active'
            }
            if(isLose(state.gameArea) === 'win') {console.log('Ты победил'); gameSlice.caseReducers.winEnd(state)}
            if(isLose(state.gameArea) === 'loose') {console.log('Ты проиграл'); gameSlice.caseReducers.looseEnd(state)}
        },
        moveDown (state) {
            const [y, x] = find(state.gameArea)
            if(badBlock.includes(state.gameArea[y+1][x])){console.log('Туда нельзя проходить!')}
            else{
                    state.gameArea[y][x] = 'produced'
                    state.gameArea[y+1][x] = 'active'
            }
            if(isLose(state.gameArea) === 'win') {console.log('Ты победил'); gameSlice.caseReducers.winEnd(state)}
            if(isLose(state.gameArea) === 'loose') {console.log('Ты проиграл'); gameSlice.caseReducers.looseEnd(state)}
        },
        moveLeft (state) {
            const [y, x] = find(state.gameArea)
            if(badBlock.includes(state.gameArea[y][x-1])){console.log('Туда нельзя проходить!')}
            else{
                state.gameArea[y][x] = 'produced'
                state.gameArea[y][x-1] = 'active'
            }
            if(isLose(state.gameArea) === 'win') {console.log('Ты победил'); gameSlice.caseReducers.winEnd(state)}
            if(isLose(state.gameArea) === 'loose') {console.log('Ты проиграл'); gameSlice.caseReducers.looseEnd(state)}
        }
    }
})

export const {  inGame, setLevel, moveUp, moveRight, moveDown, moveLeft} = gameSlice.actions;

export default gameSlice.reducer;