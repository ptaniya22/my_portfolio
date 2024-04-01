import { configureStore } from '@reduxjs/toolkit';
import ProjectSlice from './project/ProjectSlice';

export const store = configureStore({
  reducer: {
    repos: ProjectSlice,
  },
});
