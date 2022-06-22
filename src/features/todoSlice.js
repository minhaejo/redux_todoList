import { createSlice } from '@reduxjs/toolkit'

const initialState = {
      todoList:[] // const [todoList ,setTodoList] =useState()
     //에서 [todoList] 의 초기값과 동일
}


//reducer state의 값을 변경하기때문에 dispatch에 액션을 전달하면 리듀서호출 디스

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
      // 첫번째 리듀서
      //saveTodo라는 리듀서안에 set함수와 같은 기능을 동작한 후 데이터 반환
       saveTodo:(state,action)=>{
           //[setTodoList]의 내용과 동일
           state.todoList.push(action.payload)
           
            //payload: "액션의 실행에 따라 해당 데이터를 뱉어줌",
           //액션이 그냥 액션타입으로 바로 꽂히는거고 원래 뒤에 반환값이나 변경할 값 필요했잖슴 그걸 페이로드로 그냥 하고
           //useDispatch안에 saveTodo넣고 그 안에 액션 말 없이 넣기때문에 엑션 필없는거임

          //  const increment = createAction("counter/increment");

                // let action = increment(); // returns { type: 'counter/increment' }

                // action = increment(3); // returns { type: 'counter/increment', payload: 3 }

                // 위의 코드에서 볼 수 있듯이 createAction에는 기본적으로 타입 문자열만 제공하면 된다. 

                // 그리고 만들어진 액션 생성자의 파라미터는 그대로 payload 필드에 들어간다.
       },
       
       setCheck:(state,action)=>{
         state.todoList.map(item => {
           //여기서 페이로ㅓ드는   payload: {
                  // item: 'ㄴㅁㅇ',
                //   done: false,
                  //   id: 1655631219918
                  // }를 말함
           if (action.payload === item.id) {
             if (item.done === true) {
               item.done = false // 이라인도 잘 해석안됨.
             }else{
               item.done=true
             }
           }
          })
       },
       
       setDelete:(state,action)=>{
        state.todoList.filter(todos => todos.id !== action.id)
       } // 이렇게 하며s 삭제안되나>?
  }
});

// const onRemove = id => e => {
//     setTodos(todos.filter(todo => todo.id !== id));
//   };

export const {saveTodo,setCheck,setDelete} = todoSlice.actions

export const selectTodoList = state => state.todos.todoList // 이 줄 해석 안됨

export default todoSlice.reducer // 얘가  todoReducer 왜 todoReducer지? 이유가 뭐지? potatoReducer로 받아도 동작함 
//그럼 todos는 뭐임 도대체?';
