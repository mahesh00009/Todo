import React, { useState } from 'react'
import UpdateTask from './UpdateTask'
import "./TaskContainer.css"

function TaskContainer({ tasks, setTasks }) {

  const [isUpdating, setIsUpdating] = useState({id: null, Updating: false});

  const handleDelete = (id) => {

    setTasks(tasks.filter(elem => elem.id !== id))

  }

  const finishedHandler = (id) => {

    const updatedTasks = [...tasks];

    const taskIndex = updatedTasks.findIndex(task => task.id === id);


    updatedTasks[taskIndex].isCompleted = !updatedTasks[taskIndex].isCompleted;

    setIsUpdating({...isUpdating, Updating:false});


    setTasks(updatedTasks);

  }

  const handleEdit = (i) => {
    setIsUpdating({...isUpdating, id: i , Updating:true});
  }

  return ( 
     <div className='taskContainer'>


      {tasks.map((elem, index) => {

        return <div className='tasks' key={index}>
          <h1 className={`${elem.isCompleted ? "finishedTask" : "ongoingTask"}`}>      

        

            {elem.isCompleted ? `👨‍💻 ${elem.tasks}` : elem.tasks}</h1>

            {isUpdating.Updating && isUpdating.id === elem.id ? <UpdateTask id = {elem.id} setIsUpdating = {setIsUpdating} tasks = {tasks} setTasks ={setTasks}/> : ""}
        
          <div className="buttons">
            <button onClick={handleEdit.bind(this, elem.id)} className={`${elem.isCompleted  ? "finishedButtons" : "ongoingTask"}`}>Edit</button>

            <button onClick={finishedHandler.bind(this, elem.id)}>{elem.isCompleted  ? "Continue" : "Finished"}</button>

            <button onClick={handleDelete.bind(this, elem.id)} className={`${elem.isCompleted ? "finishedButtons" : "ongoingTask Delete"}`}>Delete</button>
          </div>

        </div>
      })
      }
    </div>
  )
}

export default TaskContainer