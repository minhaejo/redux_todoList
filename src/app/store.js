import { configureStore } from '@reduxjs/toolkit';
import todoReducer from "../features/todoSlice"
//export default todoSlice.reducer 이부분의 총 값을 다 가지고 오는건가?

export const store = configureStore({
  reducer: {
    todos:todoReducer //  이름은 마음대로 임의로 정해도 가능한듯? // todos라는 것도 아마 그런 맥락일것으로 추정됨
  },
});

