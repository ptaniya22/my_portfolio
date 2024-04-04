import { configureStore } from '@reduxjs/toolkit';
import ProjectSlice from './project/ProjectSlice';
// import LangReposSlice from './project/LangReposSlice';
import themeSlice from './theme/themeSlice';

export const store = configureStore({
  reducer: {
    repos: ProjectSlice,
    theme: themeSlice,
  },
});
