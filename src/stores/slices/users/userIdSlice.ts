import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiFetch } from "../../../utils/api";


const initialState = {
  user: [],
  isLoading: false,
  error: null,
};

const userIdFetch = createAsyncThunk("user", async (id: number) => {
  const response = await apiFetch.get("/users" + "/" + id);
  return response;
});

export const userIdSlice = createSlice({
    name: "user/id",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(userIdFetch.pending, (state: any) => {
            state.isLoading = true;
            state.error = null;
          })
          .addCase(userIdFetch.fulfilled, (state: any, action: any) => {
            state.isLoading = false;
            state.user = action.payload.data;
          })
          .addCase(userIdFetch.rejected, (state: any, action: any) => {
            state.isLoading = false;
            state.error = action.error.message;
          });
      },
})

export default userIdSlice.reducer