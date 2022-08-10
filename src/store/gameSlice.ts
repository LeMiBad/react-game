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
    const [y, x] = find(gameArea)
    let arrayWays = [true, true, true, true];

    (!badBlock.includes(gameArea[y-1][x]))? arrayWays[0] = true : arrayWays[0] = false;
    (!badBlock.includes(gameArea[y][x+1]))? arrayWays[1] = true : arrayWays[1] = false;
    (!badBlock.includes(gameArea[y+1][x]))? arrayWays[2] = true : arrayWays[2] = false;
    (!badBlock.includes(gameArea[y][x-1]))? arrayWays[3] = true : arrayWays[3] = false;

    if(arrayWays.includes(true)) return arrayWays.includes(true)  
}

const gameSlice = createSlice({
    name: 'game',
    initialState: {
        gameArea: [
            ['none', 'none', 'none', 'none', 'none', 'none', 'none'],
            ['none', 'full', 'full', 'full', 'full', 'full', 'none'],
            ['none', 'full', 'water', 'full', 'water', 'full', 'none'],
            ['none', 'full', 'water', 'full', 'water', 'full', 'none'],
            ['none', 'full', 'water', 'full', 'water', 'full', 'none'],
            ['none', 'full', 'active', 'full', 'full', 'full', 'none'],
            ['none', 'none', 'none', 'none', 'none', 'none', 'none'],
        ],
        victoryState: 'in-game',
    },
    reducers: {
        moveUp (state) {
            const [y, x] = find(state.gameArea)
            if(!isLose(state.gameArea)){console.log('Ты проиграл')}
            if(badBlock.includes(state.gameArea[y-1][x])){console.log('Туда нельзя проходить!')}
            else{
                state.gameArea[y][x] = 'produced'
                state.gameArea[y-1][x] = 'active'
            }
        },
        moveRight (state) {
            const [y, x] = find(state.gameArea)
            if(!isLose(state.gameArea)){console.log('Ты проиграл')}
            if(badBlock.includes(state.gameArea[y][x+1])){console.log('Туда нельзя проходить!')}
            else{
                state.gameArea[y][x] = 'produced'
                state.gameArea[y][x+1] = 'active'
            }
        },
        moveDown (state) {
            const [y, x] = find(state.gameArea)
            if(!isLose(state.gameArea)){console.log('Ты проиграл')}
            if(badBlock.includes(state.gameArea[y+1][x])){console.log('Туда нельзя проходить!')}
            else{
                    state.gameArea[y][x] = 'produced'
                    state.gameArea[y+1][x] = 'active'
            }
        },
        moveLeft (state) {
            const [y, x] = find(state.gameArea)
            if(!isLose(state.gameArea)){console.log('Ты проиграл')}
            if(badBlock.includes(state.gameArea[y][x-1])){console.log('Туда нельзя проходить!')}
            else{
                state.gameArea[y][x] = 'produced'
                state.gameArea[y][x-1] = 'active'
            }
        }
    }
})

export const {moveUp, moveRight, moveDown, moveLeft} = gameSlice.actions;

export default gameSlice.reducer;