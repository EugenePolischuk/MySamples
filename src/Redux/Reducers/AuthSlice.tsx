import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Api } from '../../api';

export interface InitialStateAuth {
  data: { success: boolean } | null;
  loading: boolean;
  currentRequestId: undefined | string;
  error: null | any;
}
const initialState: InitialStateAuth = {
  data: null,
  loading: false,
  currentRequestId: undefined,
  error: null
};

export const fetchAuth = createAsyncThunk(
  'users/fetchAuth',
  async (mail: string) => {
    const response = await Api.sendEmail(mail);
    return response.data;
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchAuth.pending, (state, action) => {
      if (state.loading === false) {
        state.loading = true;
        state.currentRequestId = action.meta.requestId;
      }
    });
    builder.addCase(fetchAuth.fulfilled, (state, action) => {
      const { requestId } = action.meta;
      if (state.loading === true && state.currentRequestId === requestId) {
        state.loading = false;
        state.data = action.payload.success;
        state.currentRequestId = undefined;
      }
    });
    builder.addCase(fetchAuth.rejected, (state, action) => {
      const { requestId } = action.meta;
      if (state.loading === true && state.currentRequestId === requestId) {
        state.loading = false;
        state.error = action.error;
        state.currentRequestId = undefined;
      }
    });
  }
});

export default authSlice.reducer;
