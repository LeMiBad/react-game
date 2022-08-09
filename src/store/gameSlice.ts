import { createSlice } from "@reduxjs/toolkit";

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

const gameSlice = createSlice({
    name: 'game',
    initialState: {
        gameArea: [
            ['active', 'full', 'full', 'full', 'full',],
            ['full', 'full', 'full', 'full', 'full'],
            ['full', 'full', 'full', 'full', 'full'],
            ['full', 'full', 'full', 'full', 'full'],
            ['full', 'full', 'full', 'full', 'full'],
        ],
        currentPos: [0, 0]
    },
    reducers: {
        moveUp (state) {
            console.log('рендер')
            let [y, x] = find(state.gameArea)
            state.gameArea[y][x] = 'produced'
            state.gameArea[y-1][x] = 'active'
        },
        moveRight (state) {
            console.log('рендер')
            let [y, x] = find(state.gameArea)
            let newarr = state.gameArea
            console.log(newarr)
            state.gameArea[y][x] = 'produced'
            state.gameArea[y][x+1] = 'active'
        },
        moveDown (state) {
            console.log('рендер')
            let [y, x] = find(state.gameArea)
            state.gameArea[y][x] = 'produced'
            state.gameArea[y+1][x] = 'active'
        },
        moveLeft (state) {
            console.log('рендер')
            let [y, x] = find(state.gameArea)
            state.gameArea[y][x] = 'produced'
            state.gameArea[y][x-1] = 'active'
        }
    }
})

export const {moveUp, moveRight, moveDown, moveLeft} = gameSlice.actions;

export default gameSlice.reducer;