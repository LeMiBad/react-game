import gameReducer  from './redusers/gameSlice';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
    reducer: {
        game: gameReducer
    }
})