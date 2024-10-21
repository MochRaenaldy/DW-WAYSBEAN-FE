import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiFetch } from "../../../utils/api";

export const productAllFetch = createAsyncThunk("product/all", async () => {
  const response = await apiFetch.get("/product");
  return response;
});

export const productDetailFetch = createAsyncThunk(
  "product/detail",
  async (id: number) => {
    const response = await apiFetch.get("/product" + "/" + id);
    return response;
  }
);

export const productAddFetch = createAsyncThunk(
  "product/add",
  async (data: any) => {
    const response = await apiFetch.post("/product/create", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response;
  }
)