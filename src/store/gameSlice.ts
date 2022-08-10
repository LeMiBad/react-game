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

const badBlock = [undefined, 'water', 'produced', 'none'];

const gameSlice = createSlice({
    name: 'game',
    initialState: {
        gameArea: [
            ['none', 'none', 'none', 'none', 'none', 'none', 'none'],
            ['none', 'active', 'full', 'full', 'full', 'full', 'none'],
            ['none', 'full', 'full', 'water', 'full', 'full', 'none'],
            ['none', 'full', 'full', 'water', 'full', 'full', 'none'],
            ['none', 'full', 'full', 'water', 'full', 'full', 'none'],
            ['none', 'full', 'full', 'full', 'full', 'full', 'none'],
            ['none', 'none', 'none', 'none', 'none', 'none', 'none'],
        ],
        currentPos: [0, 0]
    },
    reducers: {
        moveUp (state) {
            let [y, x] = find(state.gameArea)
            if(badBlock.includes(state.gameArea[y-1][x])){console.log('Туда нельзя проходить!')}
            else{
                state.gameArea[y][x] = 'produced'
                state.gameArea[y-1][x] = 'active'
            }
        },
        moveRight (state) {
            let [y, x] = find(state.gameArea)
            if(badBlock.includes(state.gameArea[y][x+1])){console.log('Туда нельзя проходить!')}
            else{
                state.gameArea[y][x] = 'produced'
                state.gameArea[y][x+1] = 'active'
            }
        },
        moveDown (state) {
            let [y, x] = find(state.gameArea)
            if(badBlock.includes(state.gameArea[y+1][x])){console.log('Туда нельзя проходить!')}
            else{
                try{
                    state.gameArea[y][x] = 'produced'
                    state.gameArea[y+1][x] = 'active'
                }catch(e){
                    console.log(e)
                    console.log(state.gameArea)
                    console.log(state.gameArea[y+1][x])
                }
            }
        },
        moveLeft (state) {
            let [y, x] = find(state.gameArea)
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