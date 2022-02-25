import {configureStore} from "@reduxjs/toolkit";
import {reducer as users} from "./slices/usersSlice";

export const store = configureStore({
    reducer: {
        users,
    },
})