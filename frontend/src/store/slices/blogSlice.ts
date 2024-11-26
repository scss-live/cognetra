import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../config/api';

interface BlogPost {
    id: number;
    title: string;
    content: string;
    author_id: number;
    image_url?: string;
    tags: string[];
    status: 'draft' | 'published';
    createdAt: string;
}

interface BlogState {
    posts: BlogPost[];
    currentPost: BlogPost | null;
    loading: boolean;
    error: string | null;
}

const initialState: BlogState = {
    posts: [],
    currentPost: null,
    loading: false,
    error: null
};

export const fetchBlogPosts = createAsyncThunk(
    'blog/fetchPosts',
    async () => {
        const response = await api.get('/blogs');
        return response.data;
    }
);

export const fetchBlogPost = createAsyncThunk(
    'blog/fetchPost',
    async (id: number) => {
        const response = await api.get(`/blogs/${id}`);
        return response.data;
    }
);

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBlogPosts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchBlogPosts.fulfilled, (state, action) => {
                state.loading = false;
                state.posts = action.payload;
            })
            .addCase(fetchBlogPosts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch blog posts';
            })
            .addCase(fetchBlogPost.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchBlogPost.fulfilled, (state, action) => {
                state.loading = false;
                state.currentPost = action.payload;
            })
            .addCase(fetchBlogPost.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch blog post';
            });
    }
});

export default blogSlice.reducer;
