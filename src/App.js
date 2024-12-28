import { useEffect, useState } from 'react'
import TodoList from './TodoList'
import TaskBox from './TaskBox'
import Header from './Header'
import Background from './Background'
import Shimmer from './Shimmer'
export default function App() {
  const [toDo, setToDo] = useState([])
  const [isDark, setIsDark] = useState(false)
  const date = new Date()
  useEffect(() => {
    if (date.toTimeString() > "16:59:59") {
      setIsDark(true)
    }
  }, [])
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('todo')) || []
    setToDo(savedData);
  }, [])
  useEffect(() => {
    if (toDo.length > 0) {
      localStorage.setItem('todo', JSON.stringify(toDo))
    }
  }, [toDo])
  
  return (
    <div className='h-screen overflow-hidden relative'>
      <Background isDark={isDark} />

      <div className='h-20 w-9/12  relative top-16 mx-auto'>
        <Header isDark={isDark} setIsDark={setIsDark} />
      </div>

      {toDo.length === 0 ? <Shimmer /> : <div div className='h-[55%] absolute w-7/12 top-[25%] right-[20%] overflow-auto scrollbar-hide'>
        {toDo.map((task, index) => <TodoList task={task.task} key={index} id={index} setToDo={setToDo} />)}
      </div>}

      <TaskBox setToDo={setToDo} toDo={toDo} />
    </div >
  )
}
