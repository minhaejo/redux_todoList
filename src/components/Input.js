import React, { useState } from 'react'
import "./Input.css"
import { useDispatch } from 'react-redux'
import { saveTodo } from '../features/todoSlice'

const Input = () => {
    const [input,setInput] = useState("")
    const dispatch = useDispatch() // 디스페치를 사용하겠다 그럼 액션이 있어야 하고 액션이 불리면 리듀서로 보냄 리듀서가 
    //스테이트를 바꾸니까 .
    const addTodo = ()=> { 
          setInput("")
      //리듀서 안에 뭐가필요함>? 당연히 액션이지 그래서 디스패치 안에 리듀서안에 액션 넣은 구조라고 보면 됨)
        dispatch(saveTodo({
            item:input,
            done:false,
            id:Date.now()  //saveTodo는 리듀서  13~15라인이 액션임 
            //saveTodo리듀서의 내용은 todoSlice에 있는데 기존 배열에 푸쉬헤주는거 
        }))
    }
  return (
    <div className='input'>
           <form onSubmit={(e)=>e.preventDefault()}>
        <input type="text" value={input} onChange={e=>setInput(e.target.value)} />
        <button onClick={addTodo}>Add!</button>
        </form>
    </div>
  )
}

export default Input

