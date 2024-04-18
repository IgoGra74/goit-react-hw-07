import { createAsyncThunk } from "@reduxjs/toolkit";
import { requestContacts } from "../services/api";

export const apiGetContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkApi) => {
    try {
      const data = await requestContacts();

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
