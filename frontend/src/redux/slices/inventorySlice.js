import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const getInventory = createAsyncThunk(
  'inventory/getInventory',
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${API_URL}/inventory`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      return response.data;
    } catch (error) {
      // Return mock data for development
      if (process.env.NODE_ENV === 'development') {
        return [
          { id: 1, bloodGroup: 'A+', quantity: 25, type: 'whole_blood', status: 'available' },
          { id: 2, bloodGroup: 'B+', quantity: 18, type: 'whole_blood', status: 'available' },
          { id: 3, bloodGroup: 'O+', quantity: 32, type: 'whole_blood', status: 'available' },
          { id: 4, bloodGroup: 'AB+', quantity: 8, type: 'whole_blood', status: 'available' }
        ];
      }
      return rejectWithValue(error.response?.data || { message: 'Failed to fetch inventory' });
    }
  }
);

const inventorySlice = createSlice({
  name: 'inventory',
  initialState: {
    items: [], // Ensure items is always an array
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
      .addCase(getInventory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getInventory.fulfilled, (state, action) => {
        state.loading = false;
        state.items = Array.isArray(action.payload) ? action.payload : [];
      })
      .addCase(getInventory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.items = []; // Ensure items is always an array even on error
      });
  }
});

export const { clearError } = inventorySlice.actions;
export default inventorySlice.reducer;