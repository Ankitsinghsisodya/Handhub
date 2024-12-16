
import { configureStore } from '@reduxjs/toolkit'
import TaskReducer from '../Features/Task/taskSlice'

export const store = configureStore({
  reducer: {
    Tasks: TaskReducer,
  },
})
