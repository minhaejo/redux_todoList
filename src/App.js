import React from 'react';
import Input from './components/Input';
import './App.css';
import TodoItem from './components/TodoItem';
import { useSelector } from 'react-redux';
import { selectTodoList } from './features/todoSlice';
import Detail from './components/Detail';



function App() {
  
  const todoList = useSelector(selectTodoList)
  console.log(todoList)
  //useSelector은 이미 state를 알고있는 놈임
  return (
    <div className="app">
      <div className='app__container'>
        <h1>Todo App</h1>
      <div className='app__todoContainer'>
        {todoList.map(item=>(
         <TodoItem
         text={item.text} // item.item input이고 그걸 name이라는 props로 전달한거임 어디로? TodoItem의 p태그 내부.
         done={item.done}
         id={item.id}
         key={item.id}
          />
        ))
        }
        </div>  
        <Detail 
         todoList={todoList} 
         
        />
      <Input/>
      </div>
    </div>
  );
}

export default App;
