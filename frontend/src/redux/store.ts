import {configureStore} from '@reduxjs/toolkit'
import { gitHubDataReducer } from './slices'


export const store = configureStore({
    reducer: {
        gitHubData : gitHubDataReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;