import React from 'react'

export const todoForm = () => {
  return (
    <form className ="TodoForm">
        <input type="text" className='todo-input' placeholder='tasks' />
        <button className='todo-btn' type='submit'></button>
    </form>
    
  )
}
