// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { apiFetch } from "../../../utils/api";

// interface ITransactionUpdate {
//   transactions: [];
//   isLoading: boolean;
//   error: null;
// }

// const initialState: ITransactionUpdate = {
//   transactions: [],
//   isLoading: false,
//   error: null,
// };

// const transactionUpdate = createAsyncThunk(
//   "transaction/update",
//   async (data: any) => {
//     const response = await apiFetch.patch(
//       "/transaction/update" + "/" + data.id,
//       data
//     );
//     return response;
//   }
// );

// export const transactionUpdateSlice = createSlice({
//   name: "transaction/update",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) =>
//     builder
//       .addCase(transactionUpdate.pending, (state: ITransactionUpdate) => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(
//         transactionUpdate.fulfilled,
//         (state: ITransactionUpdate, action: any) => {
//           state.isLoading = false;
//           state.transactions = action.payload.data;
//         }
//       )
//       .addCase(
//         transactionUpdate.rejected,
//         (state: ITransactionUpdate, action: any) => {
//           state.isLoading = false;
//           state.error = action.error;
//         }
//       ),
// });

// export default transactionUpdateSlice.reducer;
