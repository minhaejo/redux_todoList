import React from 'react'
import "./TodoItem.css"

import Checkbox from "@material-ui/core/Checkbox"

import { setCheck } from '../features/todoSlice'
import { useDispatch } from 'react-redux'

function TodoItem({name,done,id}) {
  const dispatch = useDispatch()

  const handleCheck = ()=> {
     dispatch(setCheck(id))

  }
  return (
    <div className='todoItem'>

     <Checkbox
      checked={done}
      color="primary"
      onChange={handleCheck}
      inputProps={{'aria-lable':'secondary checkbox'}}
      //aria-checked속성은 요소가 선택되었는지( true), 선택되지 않았는지( false), 또는 확인된 상태가 미정( )인지 여부를 나타냅니다 .
      />
    

      

  <p className={done && "todoItem--done"}>{name}</p>  
  
    </div>
  )
}

export default TodoItem