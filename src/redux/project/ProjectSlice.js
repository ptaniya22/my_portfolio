import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  repos: null,
};

export const getRepos = createAsyncThunk('ProjectSlice/getRepos', async () => {
  let data = await fetch(`https://api.github.com/users/ptaniya22/repos`);
  let result = await data.json();
  console.log('result', result);
  return result;
});

export const ProjectSlice = createSlice({
  name: 'ProjectSlice',
  initialState,

  extraReducers: builder => {
    builder.addCase(getRepos.fulfilled, (state, action) => {
      state.repos = action.payload;
    });
  },
});

export default ProjectSlice.reducer;

export const usersSelector = state => state.repos;
