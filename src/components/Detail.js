import React from 'react'
import { useDispatch } from 'react-redux'
import "./Detail.css"
import { setSelectAll } from '../features/todoSlice'

function Detail({todoList}) {
    const dispatch =useDispatch()
      //app.js 컴포넌트에서 todoList props로 전달해 todoList[0].done을 하면 값을 찾아 낼 수 있었음(true,false)
      //for each ? map? todoList의 [i]번째만큼 계속 돌려고했으나 i를 찾을 수 없다고 함


    const btnCheck = () => {
        
        todoList.forEach((todo) => {
            console.log(todo) // <<얘를하면 {text: 'dsa', done: false, id: 1656058314479} 이게 나옴 그렇다면 
            //todo.done 을하면 false,true값에 접근이 가능함
        dispatch(setSelectAll({
            done:true
        }))   //<< 이라인이 action payload로 가는건데 아이템에 대해 접근해서 item.done으로 해야하는데 어캐하는지 모르게따..
              // app.js에서 해결해야하는걸까? 근데 useSelector로 가져온 state의 값으로 한번더 맵을 돌리려했는데 뭔가 애매해서
            //손을 못대겠다   내가 구상한 시나리오는 done의 값을 절대값으로 true로 전달해서 전체가 그냥 무조건 체크되게 
        });
    }

  return (
    <div className='button__container'>
    <button onClick={btnCheck} >Select All</button>
    <button>Clear Todos</button>
    </div>
  )
}

export default Detail