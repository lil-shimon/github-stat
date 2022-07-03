import { createSlice } from "@reduxjs/toolkit";

interface UserStatState {
    userStat: {
        avatar_url?: string
        bio?: string
        followers?: number
        following?: number
        html_url?: string
        location?: string
        name?: string
        public_repos?: number
        repos_url?: string
    }
}

const initialState: UserStatState = {
    userStat: {}
}

export const userStatSlice = createSlice({
    name: "userStat",
    initialState: initialState,
    reducers: {
        setUserStat: (state, action) => {
            state.userStat = action.payload;
        }
    }
})

export const { setUserStat } = userStatSlice.actions;

export const userStatSelector = (state: UserStatState) => state.userStat;

export default userStatSlice.reducer;