import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
    isAuthenticated: boolean,
    isLoading: boolean,
    registerData: RegisterData
}

interface RegisterData {
    email: string,
    isActivated: boolean,
}

const initialState = {
    isAuthenticated: false,
    isLoading: true,
    registerData: {
        email: '',
        isActivated: false,
    }
} as AuthState

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuth: state => { state.isAuthenticated = true; },
        logout: state => { state.isLoading = false },
        finishInitialLoad: state => { state.isLoading = false },
        setRegisterData: (state, action) => {
            state.registerData.email = action.payload.email
            state.registerData.isActivated = action.payload.isActivated
        }
    }
})

export const { setAuth, logout, finishInitialLoad, setRegisterData } = authSlice.actions
export default authSlice.reducer