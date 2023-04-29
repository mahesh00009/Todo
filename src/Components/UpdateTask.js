import React, { useState } from 'react'
import "./UpdateTask.css"

function UpdateTask({id, setIsUpdating, tasks, setTasks}) {

    const [update, setUpdate] = useState("")



    const handleUpdate = (e) =>{

        const newIndex = tasks.findIndex(elem => elem.id === id)

        const updatedTask = [...tasks];

        updatedTask[newIndex].tasks = update;

        setUpdate(updatedTask)

        setIsUpdating({...setIsUpdating, Updating:false})
        setUpdate("")

    }

    const handleCancel =() =>{
        setIsUpdating({...setIsUpdating, Updating:false})
    }
  return (
    <div>
        <input type="text"  onChange={(e => setUpdate(e.target.value))}  value = {update} className='updateTask__input'/>
        <div className="updateTask__buttons">
        <button onClick={handleUpdate} >Update</button>
        <button onClick={handleCancel}>Cancel</button>
        </div>
         
    </div>
  )
}

export default UpdateTask