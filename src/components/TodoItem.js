import React from 'react'
import "./TodoItem.css"

import Checkbox from "@material-ui/core/Checkbox"

import { setCheck } from '../features/todoSlice'
import { useDispatch } from 'react-redux'
import {setDelete} from "../features/todoSlice"


function TodoItem(item) {
  const dispatch = useDispatch()
  const {text,done,id} = item
  console.log(text,done,id) //ex >> sad false 1656139328201 이런식으로 객체구조의 데이터를 키값으로 벨류를 뽑아옴  
  
  // store
  // state << reducer << dispatch <<action
  const handleCheck = () => {
     dispatch(setCheck(id))
  }
  return (
    <div className='todoItem'>
     <Checkbox
      checked={done}
      color="primary"
      onChange={handleCheck}
      //aria-checked속성은 요소가 선택되었는지( true), 선택되지 않았는지( false), 또는 확인된 상태가 미정( )인지 여부를 나타냄
      />
     <p className={done? "todoItem--done" : "" }>{text}</p>  
     <button onClick={()=>dispatch(setDelete(item))}>❌</button>
    </div>
  )
}

export default TodoItem