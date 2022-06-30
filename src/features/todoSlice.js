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
       },

       setCheck:(state,action)=>{
        
         //새로운 껍데기로 {} [] << [] !== [내부에선 새로운 한줄을 업데이트하는거]
         state.todoList.map(item => {
           if (action.payload === item.id) {
             if (item.done === true) {
               item.done = false  // toggle 
             }else{
               item.done=true
             }
           } 
          })
       },
       //왜 이따위로 동작함? 실패코드 1  왜자꾸 done이 undifiend로 뜨거나 트루여도 
       // store에 state의 done은 바뀔 생각을 안하나
       setDelete:(state,action)=>{
         
         const item = action.payload 
         console.log(item)
         if (item.done) {
           const newState = state.todoList.filter(todo => todo.id !== item.id)
          state.todoList = newState;
         }
         else{
           alert("체크되지 않은 항목은 삭제 할 수 없습니다.")
         }
       } ,

      
       setSelectAll: (state, action) => {
      let actionOrder =
        state.todoList.filter((item) => item.done === true).length ===
        state.todoList.length // 전체 선택된상황이라면 
          ? "allFalse" // all false로 돌려야함  전체선택된 상황이 아니라면 전체선택 되어야함 
          : state.todoList.filter((item) => item.done === true).length === 0 || // 체크된게 없고
            state.todoList.filter((item) => item.done === false).length > 0 ? "allTrue" : null;
      
            // 체크된게 하나라도 있으면 올트루 
            
             //3개의 목록 목록1:unckecked
             //목록2:unckecked
             //목록3:unckecked
             // 언체크드 length 3

              //3개의 목록 목록1:unckecked
             //목록2:ckecked
             //목록3:ckecked
             // 언체크드 length 1

              //3개의 목록 목록1:ckecked
             //목록2:ckecked
             //목록3:ckecked
             // 언체크드 length 0 이러면 all checked 된 상황이니 all false로 넘어감 ok?


      //트루인 아이템이 0 이거나 펄스인 아이템이 1개 이상일때

      switch (actionOrder) {
        case "allFalse": {
          console.log(actionOrder);
          const newState = state.todoList.map((item) => ({
            ...item,
            done: false,
          }));

          state.todoList = newState;
          break;
        }
        
        case "allTrue": {
          console.log(actionOrder);
     
          const newState = state.todoList.map((item) => ({
            ...item,
            done: true,
          }));

          state.todoList = newState;
          break;
        }
        default:
          state.todoList = state.todoList;
          break;
      }
    } ,
    setDeleteAll:(state,action) => {
          if(state.todoList.length === 0){
            alert("todoList를 작성해주세요.")
          }else{
          const newState = state.todoList.filter(item=>item.done !== true)
          state.todoList = newState
          }
      
          
          // const newState =  state.todoList.filter(item=>item.id !== state.todoList.id)
          // return newState
    }
        }
    });
    



      //실패코드2

  //  setDelete:(state,action)=>{
  //        if (setCheck.item.done == undefined) {
  //         setCheck.item.done =true
  //         if (setCheck.item.done == true) {
  //         const newState = state.todoList.filter(item => item.id !== action.payload.id)
  //         state.todoList = newState
  //         }
  //        }else{
  //          alert("체크되지 않은 항목은 삭제 할 수 없습니다.")
  //        }
  //      } 
  //     }
  //   });

      //실패코드2

      //  setDelete:(state,action)=>{
      //    if (state.todoList.done == undefined) {
      //      state.todoList.done = true
      //      if (state.todoList.done == true){
      //          const newState = state.todoList.filter(item => item.id !== action.payload.id)
      //     state.todoList = newState
      //      }else{
      //        alert("체크되지 않은 항목은 삭제 할 수 없습니다.")
      //      }
      //    }
      //  }

  export const {saveTodo,setCheck,setDelete,setSelectAll,setDeleteAll} = todoSlice.actions

  export const selectTodoList = state => state.todos.todoList // 이 줄 해석 안됨

  export default todoSlice.reducer // 얘가  todoReducer 왜 todoReducer지? 이유가 뭐지? potatoReducer로 받아도 동작함

  //그럼 todos는 뭐임 도대체?';




   
            //payload: "액션의 실행에 따라 해당 데이터를 뱉어줌",
           //액션이 그냥 액션타입으로 바로 꽂히는거고 원래 뒤에 반환값이나 변경할 값 필요했잖슴 그걸 페이로드로 그냥 하고
           //useDispatch안에 saveTodo넣고 그 안에 액션 말 없이 넣기때문에 엑션 필없는거임

          //  const increment = createAction("counter/increment");

                // let action = increment(); // returns { type: 'counter/increment' }

                // action = increment(3); // returns { type: 'counter/increment', payload: 3 }

                // 위의 코드에서 볼 수 있듯이 createAction에는 기본적으로 타입 문자열만 제공하면 된다. 

                // 그리고 만들어진 액션 생성자의 파라미터는 그대로 payload 필드에 들어간다.