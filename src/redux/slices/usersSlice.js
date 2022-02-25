import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        getUsers: (state, action) => {
            return [...action.payload]
        }
    }
})

export const reducer = userSlice.reducer;

export const getUsers = (state) => state.users;

//actions
export const getUsersAction = () => async dispatch => {
    return await axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            dispatch(userSlice.actions.getUsers(response.data));
        })
        .catch(err => console.log(err))
}

export default userSlice;

