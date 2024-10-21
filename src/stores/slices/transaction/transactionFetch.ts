import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiFetch } from "../../../utils/api";

export const transactionAllFetch = createAsyncThunk(
  "transaction/all",
  async () => {
    const response = await apiFetch.get("/transaction");
    return response;
  }
);

export const transactionAddFetch = createAsyncThunk(
  "transaction/add",
  async (data: any) => {
    const response = await apiFetch.post("/transaction/create", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response;
  }
);

export const transactionUpdate = createAsyncThunk(
  "transaction/update",
  async ({ id, status }: { id: number; status: string }) => {
    try {
      const response = await apiFetch.patch(`/transaction/update/${id}`, {
        status,
      });
      return response.data;
    } catch (error) {
      throw new Error("Failed to update transaction status");
    }
  }
);
