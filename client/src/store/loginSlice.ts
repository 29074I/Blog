import { createSlice } from '@reduxjs/toolkit'

interface UserState {
    user: {
        id: number,
        email: string,
        nickname: string,
        img_url: string,
        activeStatus: string,
        role: string,
    },
    isLoggedIn: boolean;
}

const initialState: UserState = {
    user: {
        id: 0,
        email: "",
        nickname: "",
        img_url: "",
        activeStatus: "",
        role: "",
    },
    isLoggedIn: false,
}

const loginSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.isLoggedIn = true;
        },
        setLogout: (state) => {
            state.user = initialState.user;
            state.isLoggedIn = false;
        }
    },
})

export const { setLogin, setLogout } = loginSlice.actions;
export default loginSlice.reducer