import { configureStore } from '@reduxjs/toolkit';
import ProjectSlice from './project/ProjectSlice';
import LangReposSlice from './project/LangReposSlice';

export const store = configureStore({
  reducer: {
    repos: ProjectSlice,
    lang: LangReposSlice,
  },
});
