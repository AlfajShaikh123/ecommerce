import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addUser } from "./signupApi"

const initialState = {
    home: [],
    status: 'idle'
}

export const addFevAsync = createAsyncThunk('home/addFev', async ({ id, item }) => {
    const response = await addUser(id, item);
    return response.data
})

export const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(addFevAsync.fulfilled, (state, action) => {
            state.status = 'idle';
            // Check if the item already exists in the home array
            const existingIndex = state.home.findIndex(fav => fav.id === action.payload.id);
            if (existingIndex === -1) {
                // If it doesn't exist, add the new item
                state.home.push(action.payload);
            } else {
                // If it exists, update the existing item (if needed)
                state.home[existingIndex] = { ...state.home[existingIndex], ...action.payload };
            }
        })
    }
})

export default homeSlice.reducer