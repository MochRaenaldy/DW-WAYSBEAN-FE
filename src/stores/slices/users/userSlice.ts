import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiFetch } from "../../../utils/api";

export interface IUsers {
  user: [];
  isLoading: boolean;
  error: null;
}

const initialState : IUsers = {
  user: [],
  isLoading: false,
  error: null,
};

const userFetch = createAsyncThunk("user", async () => {
  const response = await apiFetch.get("/users");
  return response;
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userFetch.pending, (state: IUsers) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(userFetch.fulfilled, (state: IUsers, action: any) => {
        state.isLoading = false;
        state.user = action.payload.data;
      })
      .addCase(userFetch.rejected, (state: IUsers, action: any) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
