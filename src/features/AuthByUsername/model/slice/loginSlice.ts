import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginSchema } from "../types/loginSchema";
import { loginByUsername } from "../services/loginByUsername/loginByUsername";

const initialState: LoginSchema = {
	isLoading: false,
	username: "",
	password: "",
};

export const loginSlice = createSlice({
	name: "login",
	initialState,
	reducers: {
		setUsername: (state, action: PayloadAction<string>) => {
			state.username = action.payload;
		},
		setPassword: (state, action: PayloadAction<string>) => {
			state.password = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(loginByUsername.pending, (state) => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(loginByUsername.fulfilled, (state, action) => {
				state.isLoading = false;
			})
			.addCase(loginByUsername.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

// Action creators are generated for each case reducer function
export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
