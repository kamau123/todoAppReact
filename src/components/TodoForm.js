import { useState } from "react";

export const TodoForm = ({addTodo}) => {
  const [input, setInput] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(input);
  }
  return (
    <form className ="TodoForm" onSubmit={handleSubmit}>
        <input type="text" className='todo-input' placeholder='tasks' onChange={(e) => setInput(e.target.value)}/>
        <button type="submit" className='todo-btn'>Add Task</button>
    </form>
    
  )
}
