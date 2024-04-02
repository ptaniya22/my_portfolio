import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  lang: null,
};

export const getLang = createAsyncThunk('ProjectSlice/getLang', async name => {
  let data = await fetch(
    `https://api.github.com/repos/ptaniya22/${name}/languages`
  );
  let result = await data.json();
  console.log('result', result);
  return result;
});

export const LangReposSlice = createSlice({
  name: 'LangReposSlice',
  initialState,

  extraReducers: builder => {
    builder.addCase(getLang.fulfilled, (state, action) => {
      state.lang = action.payload;
    });
  },
});

export default LangReposSlice.reducer;
// export const { getRepos, getLang } = ProjectSlice.actions;

// export const usersSelector = state => state.repos;
export const langSelector = state => state.lang;
