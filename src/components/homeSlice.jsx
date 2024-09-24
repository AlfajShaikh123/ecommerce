import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addUser } from "./signupApi"
import { addFev } from "./homeApi";

const initialState = {
    home: [],
    status: 'idle'
}

export const addFevAsync = createAsyncThunk('home/addFev', async ({ id, data }) => {
    const response = await addFev(id, data);
    const existingFavorites = response.data.fev || [];
    
    // Add the new item to the existing favorites
    const updatedFavorites = [...existingFavorites, item];

    // Update the account with the new favorites
    await addFev(id, updatedFavorites);

    return { id, fev: updatedFavorites }; 
})

export const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(addFevAsync.fulfilled, (state, action) => {
            state.status = 'idle';
            const { id, fev } = action.payload;
            const account = state.home.find(account => account.id === id);
            if (account) {
                account.fev = fev;
            }
        })
    }
})

export default homeSlice.reducer