import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const getAnalytics = createAsyncThunk(
  'analytics/getAnalytics',
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${API_URL}/analytics`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      return response.data;
    } catch (error) {
      // Return mock data for development
      if (process.env.NODE_ENV === 'development') {
        return {
          totalDonations: 245,
          activeDonors: 89,
          bloodGroupStats: {
            'A+': 25,
            'A-': 12,
            'B+': 18,
            'B-': 8,
            'AB+': 6,
            'AB-': 3,
            'O+': 32,
            'O-': 15
          }
        };
      }
      return rejectWithValue(error.response?.data || { message: 'Failed to fetch analytics' });
    }
  }
);

const analyticsSlice = createSlice({
  name: 'analytics',
  initialState: {
    data: {
      totalDonations: 0,
      activeDonors: 0,
      bloodGroupStats: {}
    }, // Ensure data has proper structure
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
      .addCase(getAnalytics.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAnalytics.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload || {
          totalDonations: 0,
          activeDonors: 0,
          bloodGroupStats: {}
        };
      })
      .addCase(getAnalytics.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.data = {
          totalDonations: 0,
          activeDonors: 0,
          bloodGroupStats: {}
        };
      });
  }
});

export const { clearError } = analyticsSlice.actions;
export default analyticsSlice.reducer;