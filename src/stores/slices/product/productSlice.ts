import { createSlice } from "@reduxjs/toolkit";
import { productAddFetch, productAllFetch, productDetailFetch } from "./productFetch";

export interface IProduct {
  products: [];
  isLoading: boolean;
  isLoadingAdd: boolean;
  isLoadingDetail: boolean;
  dataDetail: any;
  error: null;
  errorAdd: null;
  errorDetail: null;
}

export const initialState: IProduct = {
  products: [],
  isLoading: false,
  isLoadingAdd: false,
  isLoadingDetail: false,
  dataDetail: null,
  error: null,
  errorAdd: null,
  errorDetail: null,
};

export const productAllSlice = createSlice({
  name: "product/all",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(productAllFetch.pending, (state: IProduct) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(productAllFetch.fulfilled, (state: IProduct, action: any) => {
        state.isLoading = false;
        state.products = action.payload.data;
      })
      .addCase(productAllFetch.rejected, (state: IProduct, action: any) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const productDetailSlice = createSlice({
  name: "product/detail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(productDetailFetch.pending, (state: IProduct) => {
        state.isLoadingDetail = true;
        state.errorDetail = null;
      })
      .addCase(productDetailFetch.fulfilled, (state: IProduct, action: any) => {
        state.isLoadingDetail = false;
        state.dataDetail = action.payload.data;
      })
      .addCase(productDetailFetch.rejected, (state: IProduct, action: any) => {
        state.isLoadingDetail = false;
        state.errorDetail = action.error.message;
      });
  },
});

export const productAddSlice = createSlice({
  name: "product/add",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(productAddFetch.pending, (state: IProduct) => {
        state.isLoadingAdd = true;
        state.errorAdd = null;
      })
      .addCase(productAddFetch.fulfilled, (state: IProduct, action: any) => {
        state.isLoadingAdd = false;
        state.products = action.payload.data;
      })
      .addCase(productAddFetch.rejected, (state: IProduct, action: any) => {
        state.isLoadingAdd = false;
        state.errorAdd = action.error.message;
      });
  },
})

export const productAllReducer = productAllSlice.reducer;
export const productDetailReducer = productDetailSlice.reducer;
export const productAddReducer = productAddSlice.reducer;
