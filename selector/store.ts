import { configureStore } from "@reduxjs/toolkit";
import userStatReducer from "../slicers/userStatSlice";

export const store = configureStore({
    reducer: {
        userStat: userStatReducer
    }
})

export type RootState = ReturnType<typeof store.getState>