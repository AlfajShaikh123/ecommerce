import { configureStore } from "@reduxjs/toolkit";

import userReducer from '../components/singnupSlice'
import loginReducer from '../components/loginSlice'
import homeReducer from '../components/homeSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        login: loginReducer,
        home: homeReducer
    }
})