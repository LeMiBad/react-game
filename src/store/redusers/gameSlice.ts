import { gameState } from './../../types/IGame';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const badBlock = [undefined, 'water', 'produced', 'none'];

const find: Function = (area: Array<Array<string>>) => {
    for(let i = 0; i < area.length; i++) {
        for(let j = 0; j < area[i].length; j++) {
            if(area[i][j] === 'active') return [i, j]   
        }
    }
}

const isLose = (gameArea: Array<Array<string>>) => {
    let isWin = true

    gameArea.forEach((item) => {
        item.forEach((i) => {
            if(i === 'full') isWin = false
        })
    })
    if(isWin) return 'win'


    const [y, x] = find(gameArea)
    let arrayCounter = 0;

    (!badBlock.includes(gameArea[y-1][x]))? arrayCounter -= 1 : arrayCounter += 1;
    (!badBlock.includes(gameArea[y][x+1]))? arrayCounter -= 1 : arrayCounter += 1;
    (!badBlock.includes(gameArea[y+1][x]))? arrayCounter -= 1 : arrayCounter += 1;
    (!badBlock.includes(gameArea[y][x-1]))? arrayCounter -= 1 : arrayCounter += 1;

    if(arrayCounter === 4) return 'loose' 
}


const initialState: gameState = {
    victoryState: 'in-game',
    currentGameArea: [['arr']],
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
}


export const getLevel = createAsyncThunk(
    'game/getLevel',
    async (levelId: string) => {
        const responce = await axios.get(`https://game-for-react-game.vercel.app/levels/${levelId}`)
        return responce.data
    }
)

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setPossiblePickData (state, possiblePickData) {
            state.possiblePickData = possiblePickData.payload
        },
        inGame: (state) => {
            if(state.victoryState === 'loose'){
                state.gameArea = state.currentGameArea
            } 
            state.victoryState = 'in-game'
        },
        looseEnd (state) {
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
    },
    extraReducers(builder) {
        builder.addCase(getLevel.fulfilled, (state, action) => {
            state.gameArea = action.payload.levelInfo
            state.currentGameArea = action.payload.levelInfo
        })
    },
})

export default gameSlice.reducer;