import { combineReducers, configureStore } from '@reduxjs/toolkit';
import gameReducer from './redusers/gameSlice';


const rootReducer = combineReducers({
    gameReducer
})


export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']