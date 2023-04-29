import React, { useState } from 'react'
import "./Todo.css"
import TaskContainer from './TaskContainer';
import UpdateTask from './UpdateTask';

function Todo() {
    let [tasks, setTasks] = useState([]);

    let [newTasks, setNewTasks] = useState({ id:0 , tasks : "", isCompleted: false});

    const newTask = (e) =>{
        setNewTasks({...newTasks, tasks: e.target.value})
    }

    const handleTasks = (e) =>{
      if(newTasks.tasks !== ""){

        let currId = newTasks.id + 1
        
        let currTask = {...newTasks, id : currId}
        
        setTasks([currTask,...tasks])

        setNewTasks({...currTask, tasks:""})
        
      }
    }
  return (

    <div className='todoContainer'>
        <input type="text" placeholder='task' onChange = {newTask} value={newTasks.tasks} />
        <button onClick={handleTasks}>Submit</button>

        <TaskContainer tasks = {tasks}  setTasks = {setTasks} setNewTasks = {setNewTasks} newTask = {newTasks}/>

    </div>
  )
}

export default Todo