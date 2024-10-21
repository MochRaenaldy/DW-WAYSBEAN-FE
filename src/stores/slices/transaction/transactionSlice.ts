import { createSlice } from "@reduxjs/toolkit";
import { transactionAllFetch, transactionAddFetch, transactionUpdate } from "./transactionFetch";

export interface ITransaction {
    transactions: [],
    isLoading: boolean,
    error: null,
    isLoadingAdd: boolean,
    errorAdd : null,
    isLoadingUpdate : boolean,
    errorUpdate : null
}

export const initialState: ITransaction = {
    transactions: [],
    isLoading: false,
    error: null,
    isLoadingAdd: false,
    errorAdd : null,
    isLoadingUpdate : false,
    errorUpdate : null
}

export const transactionAllSlice = createSlice({
  name: "transaction/all",
  initialState,
  reducers: {},
  extraReducers: (builder) => builder
    .addCase(transactionAllFetch.pending, (state: ITransaction, ) => {
        state.isLoading = true;
        state.error = null;
      })
    .addCase(transactionAllFetch.fulfilled, (state: ITransaction, action : any) => {
      state.isLoading = false;
      state.transactions = action.payload.data;
    })
    .addCase(transactionAllFetch.rejected, (state: ITransaction, action : any) => {
      state.isLoading = false;
      state.error = action.error;
    })
});

export const transactionAdd = createSlice({
  name: "transaction/add",
  initialState,
  reducers: {},
  extraReducers: (builder) => builder
    .addCase(transactionAddFetch.pending, (state: ITransaction, ) => {
        state.isLoadingAdd = true;
        state.errorAdd = null;
      })
    .addCase(transactionAddFetch.fulfilled, (state: ITransaction, action : any) => {
      state.isLoadingAdd = false;
      state.transactions = action.payload.data;
    })
    .addCase(transactionAddFetch.rejected, (state: ITransaction, action : any) => {
      state.isLoadingAdd = false;
      state.errorAdd = action.error.message;
    })
})

export const transactionUpdateSlice = createSlice({
  name: "transaction/update",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(transactionUpdate.pending, (state: ITransaction) => {
        state.isLoadingUpdate = true;
        state.errorUpdate = null;
      })
      .addCase(
        transactionUpdate.fulfilled,
        (state: ITransaction, action: any) => {
          state.isLoadingUpdate = false;
          state.transactions = action.payload.data;
        }
      )
      .addCase(
        transactionUpdate.rejected,
        (state: ITransaction, action: any) => {
          state.isLoadingUpdate = false;
          state.errorUpdate = action.error.message;
        }
      ),
});


export const transactionAllReducer = transactionAllSlice.reducer;
export const transactionAddReducer = transactionAdd.reducer;
export const transactionUpdateReducer = transactionUpdateSlice.reducer;