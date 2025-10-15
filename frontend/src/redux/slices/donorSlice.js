import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const getDonors = createAsyncThunk(
  'donors/getDonors',
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${API_URL}/donors`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: 'Failed to fetch donors' });
    }
  }
);

const donorSlice = createSlice({
  name: 'donors',
  initialState: {
    donors: [],
    loading: false,
    error: null
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDonors.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getDonors.fulfilled, (state, action) => {
        state.loading = false;
        state.donors = action.payload;
      })
      .addCase(getDonors.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { clearError } = donorSlice.actions;
export default donorSlice.reducer;