import { configureStore } from '@reduxjs/toolkit';
import todoReducer, { selectTodoList } from "../features/todoSlice"
//export default todoSlice.reducer 이부분의 총 값을 다 가지고 오는건가?

export const store = configureStore({
  reducer: {
    todos:todoReducer //  이름은 마음대로 임의로 정해도 가능한듯? // todos라는 것도 아마 그런 맥락일것으로 추정됨
  },
});

//스토어부터 만듦
//리액트 컴포넌트들 만듦
//거기서 필요한 스테이트 관리해야하니까 그때 리듀서 만듦

