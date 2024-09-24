import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addUser } from "./signupApi"

const initialState = {
    users: [],
    status: 'idle'
}

export const addAsync = createAsyncThunk('user/addUser', async (item) => {
    const response = await addUser(item);
    return response.data
})

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(addAsync.fulfilled, (state, action) => {
            state.status = 'idle';
            state.users.push(action.payload)
        })
    }
})

export default userSlice.reducer