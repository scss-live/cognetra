import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../config/api';

interface Service {
    id: number;
    title: string;
    description: string;
    icon: string;
    features: string[];
    color: string;
    category: string;
    price: number;
}

interface ServiceState {
    services: Service[];
    loading: boolean;
    error: string | null;
}

const initialState: ServiceState = {
    services: [],
    loading: false,
    error: null
};

export const fetchServices = createAsyncThunk(
    'services/fetchServices',
    async () => {
        const response = await api.get('/services');
        return response.data;
    }
);

const serviceSlice = createSlice({
    name: 'services',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchServices.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchServices.fulfilled, (state, action) => {
                state.loading = false;
                state.services = action.payload;
            })
            .addCase(fetchServices.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch services';
            });
    }
});

export default serviceSlice.reducer;
