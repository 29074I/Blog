import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import sessionStorage from 'redux-persist/es/storage/session'
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import loginSlice from './loginSlice'

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

const persistConfig = {
    key: 'root',
    storage: sessionStorage,
    whiteList: ["login"],
};

const rootReducer = combineReducers({
    login: loginSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.REACT_APP_API_BASE_URL !== 'production',
})

export default store;