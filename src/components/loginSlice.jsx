import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addUser } from "./signupApi"
import { fetchData } from "./loginApi";

const initialState = {
    login: [],
    status: 'idle'
}

export const fetchAsynk = createAsyncThunk('login/fetchLogin', async () => {
    const response = await fetchData();
    return response.data
})

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchAsynk.fulfilled, (state, action) => {
            state.status = 'idle';
            state.login = action.payload
        })
    }
})

export default loginSlice.reducer